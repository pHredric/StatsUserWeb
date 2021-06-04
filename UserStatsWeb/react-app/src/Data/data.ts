import CellInfo from '../components/StatsArea/Stats/CellInfo';
import { TabsInfo } from '../components/StatsArea/Tabs/TabInfo';
import * as cellInfoDB from './fakeCellInfoDB';
import * as tabsDB from './fakeTabsDB';
import * as usersDB from './fakeUsersDB';

export function getRows(tabName: string, usedname: string) : CellInfo[][]{
    if(tabName === getAllTabs().tabs[0].title) {
        if(usedname === getAllUsers()[0]) {
            return cellInfoDB.user1statRows1;
        }
        if(usedname === getAllUsers()[1]) {
            return cellInfoDB.user2statRows1;
        }
        if(usedname === getAllUsers()[2]) {
            return cellInfoDB.user3statRows1;
        }

        return cellInfoDB.statRows1;
    }
    if(tabName === getAllTabs().tabs[1].title) {
        return cellInfoDB.statRows2;
    }
    if(tabName === getAllTabs().tabs[2].title) {
        return cellInfoDB.statRows3;
    }
    return cellInfoDB.statRows;
}

export function getAllTabs(): TabsInfo {
    return tabsDB.allMyTabs;
}

export function getAllUsers() : string[] {
    return usersDB.myUsers;
}
