import styled from "styled-components";

export const ItemWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;  
    justify-content: center;
`

export const TextWrapper = styled.div`
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: 0 auto;
`

export const BigText = styled.div`
    font-family: "S-Core Dream";
    font-weight: 300;
    font-size: 34px;
    color: #949494;
    width: 530px;
    height: 60px;
    margin: auto;
    line-height: 60px;
`

export const Bold = styled.span`
    font-weight: 500;
    color: #000;
`

export const SmallText = styled.div`
    font-family: "S-Core Dream";
    font-weight: 600;
    font-size: 20px;
    color: #949494;
    width: 507px;
    height: 32px;
    margin: auto;
    line-height: 32px;
`

export const LoginTitle = styled.div`
    width: 507px;
    height: 32px;
    padding-top: 56px;
    text-align: center; 
    border-bottom: 1px solid #949494; 
    line-height: 12px;
    margin: 0 auto; 
`

export const LoginText = styled.span`
    width: 58px;
    height: 32px;
    font-family: "S-Core Dream";
    font-weight: 600;
    font-size: 20px;
    color: #949494;
    background-color: white;
    padding-left: 25px;
    padding-right: 25px;
`

export const IconWrapper = styled.div`
    display: flex;
    width: 466px;
    margin: 0 auto;
    justify-content: space-between;
    padding-top: 60px;
`

export const kakaoFloatingButton = styled.div`
    width: 50%;
    height: 50%;
    position: fixed;

`

export const naverFloatingButton = styled.div`
    width: 50%;
    height: 50%;
    position: fixed;
    left: 1053px;

`

export const Footer = styled.div`
    width: 100%;
    height: 56px;
    line-height: 56px;
    text-align: center;
    vertical-align: middle;
    background-color: #fbfbfb;
    position: fixed;
    bottom: 0px;
    border-bottom: #EFEFEF;
`

export const FooterText = styled.span`
    font-family: "S-Core Dream";
    font-weight: 300;
    font-size: 12px;
    color: #C8C8C8;
`

export const KakaoFloatingButton = styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 185px;
    height: 48px;
    left: 1238px;
    top: 634px;

    /* Basic/white */

    background: #FFFFFF;
    /* gray/300 */

    border: 1px solid #C8C8C8;
    box-shadow: 0px 4px 4px rgba(17, 17, 17, 0.05);
    transform: rotate(-180deg);
`