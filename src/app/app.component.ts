import { Component } from '@angular/core';
import { WidgetComponent } from './widget/widget.component';
import { WeatherContentComponent } from './weather/weather-content.component';
import { WidgetContentDirective } from './widget-content.directive';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [WidgetContentDirective, WidgetComponent, WeatherContentComponent],
    template: `
    <app-widget>
        <i slot="action-icon">icon</i>
        <ng-container ngProjectAs="[header]">
            <div class="widget-title">Weather Forecast</div>
            <div class="widget-sub-title">Currently in Vienna, Austria</div>
        </ng-container>
        <ng-template appWidgetContent>
            <app-weather-content  slot="content"/>
        </ng-template>
    </app-widget>
  `
})
export class AppComponent {

}
