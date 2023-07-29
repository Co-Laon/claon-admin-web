import CameraGray from '@/assets/CameraGray';
import ProfileSkeleton from '@/assets/ProfileSkeleton';
import { IconButton } from '@mui/material';
import styled from '@emotion/styled';
import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ProfileButtonProps } from './type';

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
const StyledInput = styled.input`
  display: none;
`;

const StyledImage = styled(Image)`
  border-radius: 100%;
`;

// 임시 프로파일 버튼

function ProfileButton({ onChange, img, readOnly }: ProfileButtonProps) {
  const ref = useRef<HTMLInputElement>(null);
  const [src, setSrc] = useState<string>('/');

  useEffect(() => {
    if (typeof img === 'string') setSrc(img);
    if (img != null && typeof img !== 'string')
      setSrc(URL.createObjectURL(img));
  }, [img]);

  const onClickButton = useCallback(() => {
    ref.current?.click();
  }, []);

  return (
    <div>
      {!readOnly ? (
        <>
          <StyledInput
            type="file"
            onChange={onChange}
            accept="image/*"
            ref={ref}
          />
          <StyledIconButton onClick={onClickButton}>
            {img ? (
              <StyledImage src={src} width={72} height={72} alt="profile" />
            ) : (
              <ProfileSkeleton />
            )}
            <CameraIcon />
          </StyledIconButton>
        </>
      ) : (
        <Image src={src} width={72} height={72} alt="profile" />
      )}
    </div>
  );
}

export default ProfileButton;
