import { AuthCommand } from './application/AuthCommand.js';
import { GetUserByUserIdQuery } from './application/GetUserByUserIdQuery.js';
import { GetUserByUsernameQuery } from './application/GetUserByUsernameQuery.js';
import { GetServerStatusQuery } from './application/GetServerStatusQuery.js';
import { GetUserProgressionQuery } from './application/GetUserProgressionQuery.js';
import { GetUserRankQuery } from './application/GetUserRankQuery.js';
import { GetUserStatsQuery } from './application/GetUserStatsQuery.js';
import { GetOperatorQuery } from './application/GetOperatorsQuery.js';
import { GetUserInfoperIdQuery } from './application/GetUserInfoperIdQuery.js';

class api {
  constructor() {
    this.Auth = async (email, password) => {
      return await AuthCommand(email, password);
    };

    this.GetUserByUserId = async userId => {
      return await GetUserByUserIdQuery(userId);
    };

    this.GetUserByUsername = async (username, platform) => {
      return await GetUserByUsernameQuery(username, platform);
    };

    this.GetServerStatus = async platform => {
      return await GetServerStatusQuery(platform);
    };

    this.GetUserProgression = async (userId, platform) => {
      return await GetUserProgressionQuery(userId, platform);
    };

    this.GetUserRank = async (userId, platform) => {
      return await GetUserRankQuery(userId, platform);
    };

    this.GetUserInfoperId = async (userId, platform) => {
      return await GetUserInfoperIdQuery(userId, platform);
    }

    this.GetUserStats = async (userId, platform, view, aggregation, gameMode, teamRole, season) => {
      return await GetUserStatsQuery(
        userId,
        platform,
        view,
        aggregation,
        gameMode,
        teamRole,
        season
      );
    };

    this.GetUserOperators = async (
      userId,
      platform,
      view,
      aggregation,
      gameMode,
      teamRole,
      season
    ) => {
      return await GetOperatorQuery(
        userId,
        platform,
        view,
        aggregation,
        gameMode,
        teamRole,
        season
      );
    };
  }
}

export default api;
