import UsersManager from "./User.js";
import MessagesManager from "./Messages.js";
import CompaniesManager from "./Companies.js";

export const usersService = new UsersManager();
export const messagesService = new MessagesManager();
export const companiesService = new CompaniesManager();

