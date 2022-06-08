import { Component, Input } from '@angular/core';
import { AccountService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService, private accountServer: AccountService){}

  onSetTo(status: string) {
    // this.loggingService.logStatusChange(status);
    this.accountServer.updateStatus(this.id, status);
    this.accountServer.statusUpdated.emit(status);
  }
}
