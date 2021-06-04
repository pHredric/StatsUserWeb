export class TabInfo {
    isActive: boolean;
    title: string;
    id: number;

    constructor(isTabActive: boolean, tabTitle: string, uniqueId: number) {
        this.isActive = isTabActive;
        this.title = tabTitle;
        this.id = uniqueId;
    }
}
export class TabsInfo {
    tabs: TabInfo[];

    constructor(tabs: TabInfo[]) {
        this.tabs = tabs;
    }
}
