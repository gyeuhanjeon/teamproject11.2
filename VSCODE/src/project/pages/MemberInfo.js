
import { useState, useEffect } from 'react';
import TeamAPI from '../api/TeamAPI'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import imgHome from '../images/home_button.png'

const MemberInfo = () => {
  const [memberInfo, setMemberInfo] = useState('');
  const [loading, setLoading] = useState(false);

  const MemberListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3em;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
      width: 100%;
      padding-left: 1em;
      padding-right:1em;
    }
  `;

  const MemberList = styled.table`
    border-collapse: collapse;
    width: 768px;
    margin: 0 auto;
    font-size: 1.125em;
    @media screen and (max-width: 768px) {
      witdh: 100%;
    }
    th, td {
      border:1px solid #ccc;
      padding: 2px;
    }
    th {
      background-color: bisque;
    }
  `;

  const MemberTitle = styled.table`
    font-size: 2em;
    text-align: center;
  `;

  useEffect(() => {
    const memberData = async () => {
      setLoading(true);
      try {
        const response = await TeamAPI.memberInfo("ALL");
        setMemberInfo(response.data);
        console.log(response.data)
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    memberData();
  }, []);

  if(loading) {
    return <MemberListBlock>대기 중...</MemberListBlock>
  }

  return(
    <MemberListBlock>
      <MemberList>
        <MemberTitle>회원 정보</MemberTitle>
        <tr>
          <th>이름(NAME)</th>
          <th>아이디(ID)</th>
          <th>비밀번호(PASSWORD)</th>
          <th>생년월일(BIRTH)</th>
          <th>나이(AGE)</th>
          <th>성별(GENDER)</th>
          <th>시도(REGION1)</th>
          <th>시/구/군(REGION2)</th>
        </tr>
        {memberInfo && memberInfo.map(member => (
          <tr key={member.name}>
            <td>{member.name}</td>
            <td>{member.id}</td>
            <td>{member.pwd}</td>
            <td>{member.birth}</td>
            <td>{member.age}</td>
            <td>{member.gender}</td>
            <td>{member.region1}</td>
            <td>{member.region2}</td>
          </tr>
        ))}
      </MemberList>
      <Link to="/home" className="link-box">
        <img className="link-img" src={imgHome} alt="HOME" />
      <p>HOME으로 이동</p>
      </Link>
    </MemberListBlock>
  );
}
export default MemberInfo;