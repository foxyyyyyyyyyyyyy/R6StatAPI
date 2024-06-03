import { GetUserByUserIdQueryHandler } from '../infrastructure/GetUserByUserIdQueryHandler.js';
import { GetUserRankQueryHandler } from '../infrastructure/GetUserRankQueryHandler.js';

export const GetUserInfoperIdQuery = async (userId, platform) => {
    const Userinfo = ""
    const UserRank = ""
  try {
   Userinfo = await GetUserByUserIdQueryHandler(userId);
  } catch (error) {
    console.log(error);
  }
  try {
    UserRank = await GetUserRankQueryHandler(userId, platform);
  } catch (error) {
    console.log(error);
  }
  return (Userinfo, UserRank)
};

