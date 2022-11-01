import nowGo from '../images/short_cut.png'

function MyPage() {
  const localId = window.localStorage.getItem("userId");
  const localPw = window.localStorage.getItem("userPw");

  const onClickDrop = () => {
    console.log("탈퇴하기 버튼 눌렀어요.");
    window.location.replace("/MemberDrop");
  }

  return(
    <div>
      <div className="container">
        <div className="mainhead">
          <div onClick={onClickDrop}>
            <img src={nowGo} alt="화살표" />
            <span>탈퇴하기</span>
          </div>
        </div>
        <div className="history" >
          <p>내 아이디 : {localId}</p>
          <p>내 패스워드 : {localPw}</p>
        </div>
      </div>
    </div>
  );
}
export default MyPage;