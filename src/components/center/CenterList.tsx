import { CenterListResponse } from '@/types/response/center';
import styled from '@emotion/styled';
import Image from 'next/image';

const Container = styled.div`
  border: 1px solid #c4c4c4;
  border-radius: 16px;
`;

const Header = styled.div`
  display: flex;
  background-color: #e8def8;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  padding: 12px 16px 12px 16px;
  gap: 16px;
  border-bottom: 1px solid #c4c4c4;
`;
const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
`;

const ImageList = styled.div`
  display: flex;
  padding: 20px;
  gap: 16px;
  overflow-x: auto;
  border-bottom: 1px solid #c4c4c4;
  border-top: 1px solid #c4c4c4;
`;

const DetailContent = styled.div`
  border-top: 1px solid #c4c4c4;
  padding: 10px 16px 10px 16px;
  display: flex;
  justify-content: space-between;
`;

const StyledCount = styled.div``;

const MemberMatchingContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledCountTitle = styled.p`
  margin: none;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  margin-bottom: 5px;
  text-align: center;
  color: #79747e;
`;

const StyledCountContent = styled.p`
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  color: #6750a4;
  font-weight: 700;
`;

// =====================================================

function CenterList({
  profile_image,
  name,
  address,
  image_list,
  lector_count,
  member_count,
  matching_request_count,
}: CenterListResponse) {
  return (
    <Container>
      <Header>
        <Image src={profile_image} alt="profile" width={40} height={40} />
        <HeaderTitle>
          <span>{name}</span>
          <span>{address}</span>
        </HeaderTitle>
      </Header>
      <ImageList>
        {image_list.map((image) => (
          <Image src={image} alt="ceneter image" width={200} height={200} />
        ))}
      </ImageList>
      <DetailContent>
        <StyledCount>
          <StyledCountTitle>근무중인 강사</StyledCountTitle>
          <StyledCountContent>{lector_count}</StyledCountContent>
        </StyledCount>
        <MemberMatchingContainer>
          <StyledCount>
            <StyledCountTitle>회원 수</StyledCountTitle>
            <StyledCountContent>{member_count}</StyledCountContent>
          </StyledCount>
          <StyledCount>
            <StyledCountTitle>매칭 요청</StyledCountTitle>
            <StyledCountContent>{matching_request_count}</StyledCountContent>
          </StyledCount>
        </MemberMatchingContainer>
      </DetailContent>
    </Container>
  );
}
export default CenterList;
