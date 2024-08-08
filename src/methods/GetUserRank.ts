import { ApiClient } from './ApiClient';
import { CheckToken } from './Auth';
import { UBI_APPID, UBI_SESSIONID, BASE_UBI_URI, UBI_RANKED_URI_V2 } from '../constants';

export interface UserRank {
  casual?: RankStats;
  event?: RankStats;
  warmup?: RankStats;
  standard?: RankStats;
  ranked?: RankStats;
}

interface RankStats {
  profile_board_id: string;
  id: string;
  max_rank: number;
  max_rank_points: number;
  platform_family: string;
  rank: number;
  rank_points: number;
  rank_name: string;
  season_id: number;
  top_rank_position: number;
  deaths: number;
  kills: number;
  abandons: number;
  losses: number;
  wins: number;
}

export const GetUserRank = async (userId: string, platform: string): Promise<UserRank> => {
  const token = await CheckToken();

  const headers = {
    Authorization: `ubi_v1 t=${token}`,
    'Ubi-AppId': UBI_APPID,
    'Ubi-SessionId': UBI_SESSIONID,
    'Content-Type': 'application/json',
  };

  const platformChange = platform === 'uplay' ? 'pc' : 'console';

  const URI = BASE_UBI_URI(2) + UBI_RANKED_URI_V2(userId, platformChange);

  const response = await ApiClient(URI, headers, 'GET');

  const result: UserRank = await extractValues(await response.json());

  return result;
};

const extractValues = async (profiles: any): Promise<UserRank> => {
  const ranks: UserRank = {};

  profiles.platform_families_full_profiles.forEach((event: any) => {
    event.board_ids_full_profiles.forEach((profile: any) => {
      const boardId: string = profile.board_id;
      const fullProfile = profile.full_profiles[0].profile;
      const seasonStatistics = profile.full_profiles[0].season_statistics;

      const rank: RankStats = {
        profile_board_id: boardId,
        id: fullProfile.board_id,
        max_rank: fullProfile.max_rank,
        max_rank_points: fullProfile.max_rank_points,
        platform_family: fullProfile.platform_family,
        rank: fullProfile.rank,
        rank_points: fullProfile.rank_points,
        rank_name: fullProfile.rank_name,
        season_id: fullProfile.season_id,
        top_rank_position: fullProfile.top_rank_position,
        deaths: seasonStatistics.deaths,
        kills: seasonStatistics.kills,
        abandons: seasonStatistics.match_outcomes.abandons,
        losses: seasonStatistics.match_outcomes.losses,
        wins: seasonStatistics.match_outcomes.wins,
      };
      (ranks as any)[boardId] = rank;
    });
  });
  return ranks;
};