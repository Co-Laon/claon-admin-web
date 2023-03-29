import CameraGray from '@/assets/CameraGray';
import ProfileSkeleton from '@/assets/ProfileSkeleton';
import { IconButton } from '@mui/material';
import styled from '@emotion/styled';

const CameraIcon = styled(CameraGray)`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const StyledIconButton = styled(IconButton)`
  padding: 0;
  width: 72px;
  height: 72px;
`;

// 임시 프로파일 버튼

function ProfileButton() {
  return (
    <StyledIconButton>
      <ProfileSkeleton />
      <CameraIcon />
    </StyledIconButton>
  );
}

export default ProfileButton;
