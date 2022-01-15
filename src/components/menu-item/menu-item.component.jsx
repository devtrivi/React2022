import React from "react";
import { useNavigate } from 'react-router-dom'
const MenuItem = ({ title, id, imageUrl, linkUrl}) => {
  const navigate = useNavigate();
/* ztm used history.push(`${match.url}${linkUrl}`) */
  return (
    <div className={`menu-item`} onClick={()=> 
      navigate(`/${linkUrl}`)} style={{
      minWidth: "30%", height: "240px",
      flex: "1 1 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid black",
      margin: "0 7.5px 15px",
      overflow: "hidden"
    }}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`, width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="content" style={{
        height: "90px",
        padding: "0 25px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid black",
        backgroundColor: "white",
        opacity: "0.7",
        position: "absolute"
      }}>
        <h1 className="title" style={{
          fontWeight: "bold", margin: "0 6px 0",
          fontSize: "22px",
          color: "#4a4a4a"
        }}> {title.toUpperCase()}</h1>
        <span className="subtitle" style={{
          fontWeight: "lighter",
          fontSize: "16px"
        }}>SHOP NOW</span>
      </div>
    </div >
  );
};
/* 
.first-color { 
  background: #e0ffcd; 
}
	
.second-color { 
  background: #fdffcd; 
}

.third-color { 
  background: #ffebbb; 
}

.fourth-color { 
  background: #ffcab0; 
}

const StyledCard = styled.article`
  width: 90vw;
  max-width: 300px;
  background: var(--white);
  border-radius: 0.25rem;
  img {
    width: 100%;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    h4 {
      text-transform: capitalize;
      &::before {
        content: "Name : ";
        color: red;
      }
    }
    p {
      color: var(--primary);
      font-weight: 700;
    }
  }
  transition: all 0.5s ease-in-out;
  &:hover {
    box-shadow: 0 3px 3px #222;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    max-width: 600px;
  }
`; */

export default MenuItem;
