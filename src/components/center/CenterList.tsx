import { CenterListResponse } from '@/types/response/center';
import styled from '@emotion/styled';
import Image from 'next/image';

const Container = styled.div`
  border: 1px solid #c4c4c4;
  border-radius: 16px;
`;

const Header = styled.div`
  background-color: #e8def8;
`;
const HeaderTitle = styled.div``;

const ImageList = styled.div``;

const DetailContent = styled.div``;

const StyledCount = styled.div``;

const MemberMatchingContainer = styled.div``;

const StyledCountTitle = styled.p``;

const StyledCountContent = styled.p``;

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
        <Image src={profile_image} alt="profile" />
        <HeaderTitle>
          <span>{name}</span>
          <span>{address}</span>
        </HeaderTitle>
      </Header>
      <ImageList>
        {image_list.map((image) => (
          <Image src={image} alt="ceneter image" />
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
