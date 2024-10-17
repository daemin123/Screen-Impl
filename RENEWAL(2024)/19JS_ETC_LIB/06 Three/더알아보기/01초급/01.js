// 씬 생성
const scene = new THREE.Scene();

// 카메라 생성 (원근 카메라)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 렌더러 생성 및 크기 설정
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 기본 박스 메쉬 생성
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 애니메이션 함수
function animate() {
    requestAnimationFrame(animate);
    
    // 큐브 회전
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    // 씬 렌더링
    renderer.render(scene, camera);
}

// 애니메이션 시작
animate();

// 윈도우 리사이즈 이벤트 처리
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});


// 씬 생성: THREE.Scene()을 사용하여 3D 장면을 만듭니다.
// 카메라 생성: THREE.PerspectiveCamera로 카메라를 설정하고, 카메라의 위치를 설정합니다.
// 렌더러 생성: THREE.WebGLRenderer를 사용하여 렌더러를 만들고, 렌더링 크기를 설정합니다. 그리고 renderer.domElement를 HTML 문서에 추가합니다.
// 기본 박스 메쉬 생성: THREE.BoxGeometry와 THREE.MeshBasicMaterial을 사용하여 기본 박스 형태를 만들고, 씬에 추가합니다.
// 애니메이션: requestAnimationFrame을 사용하여 매 프레임마다 큐브의 회전을 업데이트하고 씬을 다시 렌더링합니다.
// 리사이즈 처리: 브라우저 창 크기 변경에 대응하여 렌더러와 카메라의 크기를 조정합니다