import {
    AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck,
    ElementRef, HostListener, OnDestroy,
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
import * as THREE from 'three';

@Component({
    selector: 'app-main-page',
    templateUrl: 'main-page.component.html',
    styleUrl: 'main-page.component.scss',
    standalone: true,
    imports: [CommonModule, MatIcon, MatButtonModule, MatDivider, MatCardActions, MatCardContent, MatCardSubtitle, MatCardTitle, MatCardHeader, MatCard, RouterLink],
})
export class MainPageComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('backgroundVideo') backgroundVideo!: ElementRef;
    @ViewChild('rendererContainer', {static: true}) rendererContainer!: ElementRef;
    private scene!: THREE.Scene;
    private camera!: THREE.PerspectiveCamera;
    private renderer!: THREE.WebGLRenderer;
    private video!: HTMLVideoElement;
    private videoTexture!: THREE.VideoTexture;
    private animationId!: number;
    windowWidth: number = window.innerWidth;
    windowHeight: number = window.innerHeight;

    @HostListener('window:resize', ['$event'])
    onResize(event: Event): void {
        this.windowWidth = (event.target as Window).innerWidth;
        this.windowHeight = (event.target as Window).innerHeight;

        // Обновляем соотношение сторон камеры
        this.camera.aspect = this.windowWidth / this.windowHeight;
        this.camera.updateProjectionMatrix();

        // Обновляем размер рендерера
        this.renderer.setSize(this.windowWidth, this.windowHeight);

        // Корректировка масштаба плоскости, чтобы она оставалась пропорциональной
        const scaleX = this.windowWidth / 200;
        const scaleY = this.windowHeight / 200;
        const plane = this.scene.children[0]; // Получаем первую добавленную плоскость (в данном случае это видео плоскость)
        plane.scale.set(scaleX, scaleY, 1);
    }

    ngOnInit() {
        this.initVideo();
    }

    ngAfterViewInit(): void {
        this.initThree();
        this.animate();
    }

    ngOnDestroy(): void {
        cancelAnimationFrame(this.animationId);
        this.renderer.dispose();
        if (this.video) {
            this.video.pause();
            this.video.removeAttribute('src'); // Очистка источника видео
            this.video.load();
        }
    }

    private initVideo(): void {
        this.video = document.createElement('video');
        this.video.src = 'assets/videos/20svideo.mp4';
        this.video.muted = true;
        this.video.autoplay = true;
        this.video.loop = true;
        this.video.load();
        this.video.play();

        // Устанавливаем видео с пропорциями
        this.video.style.position = 'absolute';
        this.video.style.top = '50%';
        this.video.style.left = '50%';
        this.video.style.transform = 'translate(-50%, -50%)'; // Центрируем видео
        this.video.style.width = '1980px'; // Ширина видео всегда будет 100%
        this.video.style.height = 'auto'; // Высота будет автоматически вычисляться с сохранением пропорций
        this.video.style.minWidth = '100vw'; // Минимальная ширина видео — ширина экрана
        this.video.style.minHeight = '100vh'; // Минимальная высота видео — высота экрана
        this.video.style.objectFit = 'cover'; // Видео будет масштабироваться, сохраняя пропорции
        this.video.style.overflow = 'hidden'; // Видео будет масштабироваться, сохраняя пропорции


        // Создаем текстуру для THREE.js
        this.videoTexture = new THREE.VideoTexture(this.video);
        this.videoTexture.minFilter = THREE.LinearFilter;
        this.videoTexture.magFilter = THREE.LinearFilter;
        this.videoTexture.format = THREE.RGBAFormat;
    }

    private initThree(): void {
        // Создаем сцену, камеру и рендерер
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, this.windowWidth / this.windowHeight, 0.1, 1000);
        this.camera.position.z = 5;

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(this.windowWidth, this.windowHeight);
        this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

        // Создаем плоскость с видео текстурой
        const geometry = new THREE.PlaneGeometry(2, 2, 1, 1); // Плоскость теперь будет с соотношением сторон 1:1
        const material = new THREE.MeshBasicMaterial({map: this.videoTexture});
        const plane = new THREE.Mesh(geometry, material);
        this.scene.add(plane);

        // Изначально масштабируем плоскость
        this.adjustPlaneScale(plane);
    }

    private adjustPlaneScale(plane: THREE.Mesh): void {
        // Корректировка масштаба плоскости в зависимости от размеров окна
        const scaleX = this.windowWidth / 200;
        const scaleY = this.windowHeight / 200;
        plane.scale.set(scaleX, scaleY, 1);
    }

    private animate(): void {
        this.animationId = requestAnimationFrame(() => this.animate());
        this.renderer.render(this.scene, this.camera);
    }
}
