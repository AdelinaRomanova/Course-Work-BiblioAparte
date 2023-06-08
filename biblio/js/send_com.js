const addCommentButton = document.getElementById("add_comment_button");
addCommentButton.addEventListener("click", (event) => {
  event.preventDefault();
  const commentTextarea = document.getElementById("textarea_comment");
  const comment = commentTextarea.value;
  if (comment !== "") {
    const commentContainer = document.createElement("div");
    commentContainer.classList.add("book_commet");
    commentContainer.innerHTML = `
    <div class="book_comment_profile">
      <img src="img/ava.png" alt="" class="book_comment_profile_ava">
    </div>
    <div class="book_comment_text">
      <div class="book_comment_text_nickname">dumplingg</div>
      <div class="book_comment_text_area">${comment}</div>
    </div>
    `;
    const sendComForm = document.querySelector(".comment_section");
    sendComForm.prepend(commentContainer);
    commentTextarea.value = "";
  }
});