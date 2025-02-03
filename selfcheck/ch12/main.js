document.forms[0].addEventListener("submit", function (e) {
  // 1. 폼 이벤트 취소
  e.preventDefault();
  const idEl = document.forms[0].username;
  const idValue = idEl.value.trim();
  const pwEl = document.forms[0].password;
  const pwValue = pwEl.value.trim();

  // 2. 아이디 체크
  if (idValue === "") {
    alert("아이디를 입력해 주세요.");
    idEl.focus();
    return;
  }

  // 3. 이메일 형식
  if (idValue.indexOf("@") === -1) {
    alert("아이디는 이메일 형식으로 입력해 주세요.");
    idEl.focus();
    return;
  }

  // 4. 비밀번호 입력
  if (pwValue.trim() === "") {
    alert("비밀번호를 입력해 주세요.");
    pwEl.focus();
    return;
  }

  // 5. 비밀번호 체크
  if (pwValue.trim().length <= 4) {
    alert("비밀번호는 5자리 이상 입력해 주세요.");
    pwEl.focus();
  }

  // 6. 폼 전송
  this.submit();
});
