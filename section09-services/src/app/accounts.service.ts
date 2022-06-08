import { Injectable, EventEmitter } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
    ];

    statusUpdated = new EventEmitter<string>();

    constructor(private loggingService: LoggingService){
        this.loggingService.logStatusChange('A server status changed, new status: ' + this.accounts[0].status);
    }

    addAccount(name: string, status: string) {
        this.accounts.push({name: name, status: status});
    }

    updateStatus(id: number, newStatus: string){
        this.accounts[id].status = newStatus;
    }
}