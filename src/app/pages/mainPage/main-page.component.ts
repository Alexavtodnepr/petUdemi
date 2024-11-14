import {
    AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck,
    ElementRef,
    OnInit,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIcon} from "@angular/material/icon";
import {MatButtonModule, MatFabButton} from "@angular/material/button";
import {MatDivider} from "@angular/material/divider";
import {
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle
} from "@angular/material/card";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-main-page',
    templateUrl: 'main-page.component.html',
    styleUrl: 'main-page.component.scss',
    standalone: true,
    imports: [CommonModule, MatIcon, MatButtonModule, MatDivider, MatCardActions, MatCardContent, MatCardSubtitle, MatCardTitle, MatCardHeader, MatCard, RouterLink],
})
export class MainPageComponent implements OnInit, AfterViewInit, DoCheck {
    @ViewChild('backgroundVideo') videoElementRef!: ElementRef;
    @ViewChild('hiddenButton') hiddenButton!: ElementRef<HTMLButtonElement>;

    ngOnInit() {

    }

    ngAfterViewInit(): void {
            this.hiddenButton.nativeElement.click();
            const videoElement = this.videoElementRef.nativeElement as HTMLVideoElement;
            console.log(videoElement)
            if (videoElement) {
                setTimeout(()=>{
                    videoElement.play().catch((error) => {
                        console.error('Error attempting to play video:', error);
                    });
                },1000)

            }

    }

    ngDoCheck(): void {
    }

    // play() {
    //     const videoElement = this.videoElementRef.nativeElement as HTMLVideoElement;
    //     console.log(videoElement, 'mouseentered')
    //     if (videoElement) {
    //         setTimeout(()=>{
    //             videoElement.play().catch((error) => {
    //                 console.error('Error attempting to play video:', error);
    //             });
    //         },1000)
    //
    //     }
    // }
}
