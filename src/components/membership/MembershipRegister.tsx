import { useCallback, useEffect, useState } from 'react';
import { useUploadMembershipImage } from '@/hooks/queries/membership/useUploadMembershipImage';
import { useUpdateCenterFees } from '@/hooks/queries/membership/useUpdateCenterFees';
import { FeeResponse } from '@/types/response/membership';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import ImageList from '../common/ImageList';
import ListForm from '../register/ListForm';
import MembershipItem from './MembershipItem';

interface MembershipRegisterProps {
  feeInfo?: FeeResponse;
  centerId: string;
}

const Container = styled.form``;
const StyledTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
`;
const StyledSubTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;
const StyledDescription = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;

const StyledImageList = styled(ListForm)`
  width: 50%;
`;

const ButtonContainer = styled.div``;

const StyledButton = styled(Button)``;

function MembershipRegister({ feeInfo, centerId }: MembershipRegisterProps) {
  const { register, control, unregister, handleSubmit } = useForm();
  const [imgs, setImgs] = useState<(string | File)[]>([]);
  const { mutateAsync: uploadImage } = useUploadMembershipImage(centerId);
  const { mutate: updateFees } = useUpdateCenterFees(centerId);

  const onSubmit = useCallback((datas: any) => {
    const requests: UpdateCenterFeeRequest = {
      fee_img: [],
      center_fee: datas.membership
        .filter((data: any) => data)
        .map((data: CenterFeeRequest) => ({
          count: Number(data.count),
          name: data.name,
          period: Number(data.period),
          period_type: data.period_type,
          price: Number(data.price),
        })),
    };
    if (typeof imgs === 'string')
      updateFees({ ...requests, fee_img: imgs as string[] });
    else {
      Promise.all(imgs.map((img) => uploadImage(img as File))).then(
        (values) => {
          updateFees({ ...requests, fee_img: values.map((v) => v.file_url) });
        }
      );
    }
  }, []);

  const onChangeImageList = useCallback((images: (string | File)[]) => {
    setImgs(images);
  }, []);

  useEffect(() => {
    setImgs(feeInfo?.fee_img || []);
  }, [feeInfo?.fee_img]);

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <StyledTitle>회원권</StyledTitle>
      <StyledDescription>
        판매된 회원권 정보는 수정이 되지 않아요.
      </StyledDescription>
      <ImageList
        images={imgs || []}
        onChangeImageList={onChangeImageList}
        title="회원권 항목 이미지를 입력해주세요"
        subTitle="최대 5장까지 업로드 가능해요"
      />
      <ListForm
        formName="membership"
        items={<MembershipItem />}
        register={register}
        unregister={unregister}
        title={<StyledSubTitle>회원권 항목을 입력해주세요</StyledSubTitle>}
        control={control}
      />
      <ButtonContainer>
        <StyledButton>취소</StyledButton>
        <StyledButton type="submit">저장</StyledButton>
      </ButtonContainer>
    </Container>
  );
}

export default MembershipRegister;
