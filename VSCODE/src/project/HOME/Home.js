import React, { useState, useEffect } from 'react';
import TeamAPI from '../api/TeamAPI'
import nowGo from '../images/short_cut.png'

const Home = () => {
  const isLogin = window.localStorage.getItem("isLogin");
  if (isLogin === "FALSE") window.location.replace("/");

  const localId = window.localStorage.getItem("userId");
  const localPw = window.localStorage.getItem("userPw");

  const [memberInfo, setMemberInfo] = useState(""); // 현재 로그인 되어 있는 회원의 정보 저장용

  useEffect(() => {

    const memberData = async () => {
      console.log("localId : " + localId);
      try {
        const response = await TeamAPI.memberInfo(localId); // 원래는 전체 회원 조회용
        setMemberInfo(response.data);
        console.log(response.data)
      } catch (e) {
        console.log(e);
      }
    };
    memberData();
  }, []);

  const onClickMember = () => {
    console.log("회원 목록 조회 눌렀어요.");
    window.location.replace("/MemberInfo");
  }

  const onClickDrop = () => {
    console.log("탈퇴하기 버튼 눌렀어요.");
    alert("콘솔 확인하세요.")
    window.location.replace("/MemberDrop");
  }
  const onClickMbti = () => {
    window.location.replace("/pg1");
  }

  return (
    <div>
      <div className="container">
        <div className="mainhead">
          <div onClick={onClickMember}>
            <img src={nowGo} alt="화살표" />
            <span>회원 목록 조회</span>
          </div>
          <div onClick={onClickDrop}>
            <img src={nowGo} alt="화살표" />
            <span>탈퇴하기</span>
          </div>

          <div onClick={onClickMbti}>
            <img src={nowGo} alt="화살표" />
            <span>MBTI</span>
          </div>
        </div>
        <div className="history" >
          {memberInfo && memberInfo.map(member => (
            <div key={member.id}>
              <p>이름 : {member.name}</p>
              <p>아이디 : {member.id}</p>
              <p>비밀번호 : {member.pwd}</p>
              <p>생년월일 : {member.birth}</p>
              <p>나이 : {member.age}</p>
              <p>성별 : {member.gender}</p>
              <p>주소 : {member.region1} {member.region2}</p>
            </div>))}
        </div>
      </div>
    </div>
  );

}

export default Home;