// /* css를 참고해서 JS 코드를 작성해 주세요! */

// 1. 상품 카드 출력하기 (제고 관리도 같이!)---------------------------
// 1. 상품 카드 출력하기 (제고 관리도 같이!)---------------------------
// 1. 상품 카드 출력하기 (제고 관리도 같이!)---------------------------

const products = [
    { name: "사과", price: 1000, stock: 10, image: "/static/img/apple.jpg" },
    { name: "바나나", price: 500, stock: 0, image: "/static/img/banana.jpg" },
    { name: "딸기", price: 2500, stock: 5, image: "/static/img/strawberry.jpg" },
    { name: "망고", price: 35000, stock: 0, image: "/static/img/mango.jpg" },
    //📌 추가 실습! 원하는 상품을 등록해 보세요 :)
];

const productList = document.getElementById("product_list");

products.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    // 상품 진열 카드를 구성하는 코드를 아래에 작성해 주세요!

});


// 2. 댓글 작성 기능 만들기 -------------------------------------------
// 2. 댓글 작성 기능 만들기 -------------------------------------------
// 2. 댓글 작성 기능 만들기 -------------------------------------------]

const commentInput = document.getElementById("comment_input");
const submitCommentBtn = document.getElementById("submit_comment");
const commentList = document.getElementById("comment_list");

submitCommentBtn.addEventListener("click", () => {
    const commentText = commentInput.value.trim();
    if (!commentText) return alert("댓글을 입력해주세요!");
    // 이어서 함수를 작성해 주세요!
    
});


// 3. 좋아요 버튼 만들기! ---------------------------------------------
// 3. 좋아요 버튼 만들기! ---------------------------------------------
// 3. 좋아요 버튼 만들기! ---------------------------------------------

const likeBtn = document.getElementById("likeBtn");
let likeCount = 0;
let isClicked = false;

// 뭐가 필요할까요오? 이어서 작성해 주세요!



// 4. 게시판 만들기 ---------------------------------------------------
// 4. 게시판 만들기 ---------------------------------------------------
// 4. 게시판 만들기 ---------------------------------------------------

const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const writeBtn = document.getElementById("writeBtn");
const board = document.getElementById("board");

writeBtn.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();
    const fileInput = document.getElementById("image_upload");
    const file = fileInput.files[0];

    if (!title || !content) return alert("제목과 내용을 모두 입력하세요");

    const post = document.createElement("div");
    post.className = "post_card";

    let imageTag = "";
    if (file) {
        const imgURL = URL.createObjectURL(file);
        imageTag = `<img src="${imgURL}" class="post_img" alt="첨부 이미지">`;
    }

    post.innerHTML = `
        ${imageTag}
        <h2>${title}</h2>
        <p>${content}</p>
    `;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "삭제";
    deleteBtn.className = "deleteBtn";
    deleteBtn.addEventListener("click", () => post.remove());

    post.appendChild(deleteBtn);
    board.appendChild(post);

    titleInput.value = "";
    contentInput.value = "";
    fileInput.value = "";
});
