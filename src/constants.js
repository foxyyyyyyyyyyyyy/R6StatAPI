// export const UBI_APPID = '3587dcbb-7f81-457c-9781-0e3f29f6f56a';
export const UBI_APPID = 'e3d5ea9e-50bd-43b7-88bf-39794f4e3d40';

export const UBI_AUTH_URI = '/profiles/sessions';

export const UBI_SANDBOXES = [
  { id: 'uplay', value: 'OSBOR_PC_LNCH_A' },
  { id: 'psn', value: 'OSBOR_PS4_LNCH_A' },
  { id: 'xbl', value: 'OSBOR_XBOXONE_LNCH_A' },
];

export const UBI_SPACEIDS = [
  { id: 'uplay', value: '5172a557-50b5-4665-b7db-e3f2e8c5041d' },
  { id: 'psn', value: '05bfb3f7-6c21-4c42-be1f-97a33fb5cf66' },
  { id: 'xbl', value: '98a601e5-ca91-4440-b1c5-753f601a2c90' },
];

export const UBI_SERVER_IDS = [
  { id: 'pc', value: 'e3d5ea9e-50bd-43b7-88bf-39794f4e3d40' },
  { id: 'ps4', value: 'fb4cc4c9-2063-461d-a1e8-84a7d36525fc' },
  { id: 'xbox', value: '4008612d-3baf-49e4-957a-33066726a7bc' },
];

export const UBI_REGIONID = ['emea', 'ncsa', 'apac'];

export const UBI_BOARDID = ['pvp_ranked', 'pvp_casual', 'pvp_newcomer', 'pvp_event'];

export const BASE_UBI_URI = version => `https://public-ubiservices.ubi.com/v${version}`;

export const UBI_SERVER_STATUS_URI = 'https://game-status-api.ubisoft.com/v1';

export const UBI_GETUSERBYUSERNAME_URI = (userName, platform) =>
  `/profiles?namesOnPlatform=${userName}&platformType=${platform}`;

export const UBI_GETUSERBYID_URI = userId => `/profiles?userIds=${userId}`;

export const UBI_GETPLAYERPROGRESSION = (spaceId, sandbox, playerIds) =>
  `/spaces/${spaceId}/sandboxes/${sandbox}/r6playerprofile/playerprofile/progressions?profile_ids=${playerIds}`;

export const UBI_GETSERVERSTATUS = serverId => `/instances?appIds=${serverId}`;

export const UBI_RANKED_URI = (spaceId, sandboxId, boardId, seasons, regionId, profileIds) =>
  `/spaces/${spaceId}/sandboxes/${sandboxId}/r6karma/player_skill_records?board_ids=${boardId}&season_ids=${seasons}&region_ids=${regionId}&profile_ids=${profileIds}`;

export const UBI_PROFILEV2_URI = (profileId, platform) =>
  `https://public-ubiservices.ubi.com/v2/spaces/0d2ae42d-4c27-4cb7-af6c-2099062302bb/title/r6s/skill/full_profiles?profile_ids=${profileId}&platform_families=${platform}`;

// DTOs

export class ProgressionDto {
  constructor(xp, profileId, lootboxProbability, level) {
    (this.xp = xp),
      (this.profileId = profileId),
      (this.lootboxProbability = lootboxProbability),
      (this.level = level);
  }
}

export class ServerStatusDto {
  constructor(platform, status, maintenance, impactedFeatures) {
    (this.platform = platform),
      (this.status = status),
      (this.maintenance = maintenance),
      (this.impactedFeatures = impactedFeatures);
  }
}

export class UserProfileDto {
  constructor(profileId, userId, platformType, idOnPlatform, nameOnPlatform) {
    (this.profileId = profileId),
      (this.userId = userId),
      (this.platformType = platformType),
      (this.idOnPlatform = idOnPlatform),
      (this.nameOnPlatform = nameOnPlatform);
  }
}

export class UserRankDtoV1 {
  constructor(
    maxMMR,
    skillMean,
    deaths,
    profileId,
    nextRankMMR,
    rank,
    maxRank,
    boardId,
    skillStdev,
    kills,
    lastMatchSkillStdevChange,
    pastSeasonWins,
    updateTime,
    lastMatchMMRChange,
    abandons,
    season,
    pastSeasonsLosses,
    topRankPosition,
    lastMatchSkillMeanChange,
    MMR,
    previousRankMMR,
    lastMatchResult,
    pastSeasonsAbandons,
    wins,
    region,
    losses
  ) {
    (this.maxMMR = maxMMR), (this.skillMean = skillMean);
    (this.deaths = deaths),
      (this.profileId = profileId),
      (this.nextRankMMR = nextRankMMR),
      (this.rank = rank),
      (this.maxRank = maxRank),
      (this.boardId = boardId),
      (this.skillStdev = skillStdev),
      (this.kills = kills),
      (this.lastMatchSkillStdevChange = lastMatchSkillStdevChange),
      (this.pastSeasonWins = pastSeasonWins),
      (this.updateTime = updateTime),
      (this.lastMatchMMRChange = lastMatchMMRChange),
      (this.abandons = abandons),
      (this.season = season),
      (this.pastSeasonsLosses = pastSeasonsLosses),
      (this.topRankPosition = topRankPosition),
      (this.lastMatchSkillMeanChange = lastMatchSkillMeanChange),
      (this.MMR = MMR),
      (this.previousRankMMR = previousRankMMR),
      (this.lastMatchResult = lastMatchResult),
      (this.pastSeasonsAbandons = pastSeasonsAbandons),
      (this.wins = wins),
      (this.region = region),
      (this.losses = losses);
  }
}

export class UserRankDtoV2 {
  constructor(
    boardId,
    id,
    maxRank,
    maxRankPoints,
    platformFamily,
    rank,
    rankPoints,
    seasonId,
    topRankPosition,
    deaths,
    kills,
    abandons,
    wins,
    losses
  ) {
    (this.boardId = boardId),
      (this.id = id),
      (this.maxRank = maxRank),
      (this.maxRankPoints = maxRankPoints),
      (this.platformFamily = platformFamily),
      (this.rank = rank),
      (this.rankPoints = rankPoints),
      (this.seasonId = seasonId),
      (this.topRankPosition = topRankPosition),
      (this.deaths = deaths),
      (this.kills = kills),
      (this.abandons = abandons),
      (this.wins = wins),
      (this.losses = losses);
  }
}
