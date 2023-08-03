import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useUploadMembershipImage } from '@/hooks/queries/membership/useUploadMembershipImage';
import { useUpdateCenterFees } from '@/hooks/queries/membership/useUpdateCenterFees';
import { FeeResponse } from '@/types/response/membership';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import ImageList from '../common/ImageList';
import ListForm from '../register/ListForm';
import MembershipItem from './MembershipItem';
import CenterModal from '../center/CenterModal';

interface MembershipRegisterProps {
  feeInfo?: FeeResponse;
  centerId: string;
}

const Container = styled.form`
  padding-left: 20px;
  padding-right: 20px;
`;
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

const StyledImageList = styled(ImageList)`
  margin-top: 16px;
  width: 500px;
  & > div :first-child {
    justify-content: start;
    gap: 20px;
  }
  & > div:last-child {
    margin-top: 10px;
    padding: 36px 212px 36px 212px;
  }
`;

const StyledListFormContainer = styled.div`
  width: 1100px;
  margin-top: 30px;
`;

const StyledListForm = styled(ListForm)`
  & > div :first-child {
    justify-content: start;
    gap: 20px;
  }
  & > ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 72px;
  }
  & > ul > li {
    display: inline-block;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 12px;
  margin-top: 30px;
`;

const StyledButton = styled(Button)<{ primary?: boolean }>`
  border-radius: 100px;
  border: 1px solid #c4c4c4;
  padding: 0px 24px 0px 24px;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: #6750a4;
  cursor: pointer;
  ${({ primary }) =>
    primary &&
    css`
      border: none;
      background-color: #6750a4;
      color: white;
    `}
`;

function MembershipRegister({ feeInfo, centerId }: MembershipRegisterProps) {
  const { register, control, unregister, handleSubmit } = useForm();
  const [imgs, setImgs] = useState<(string | File)[]>([]);
  const { mutateAsync: uploadImage } = useUploadMembershipImage(centerId);
  const { mutate: updateFees } = useUpdateCenterFees(centerId);
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

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

  const modalOnOf = useCallback((modalState: boolean) => {
    return () => {
      setOpen(modalState);
    };
  }, []);

  const onClickCancel = useCallback(() => {
    unregister();
    router.back();
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
      <StyledImageList
        images={imgs || []}
        onChangeImageList={onChangeImageList}
        title="회원권 항목 이미지를 입력해주세요."
        subTitle="최대 5장까지 업로드 가능해요."
      />
      <StyledListFormContainer>
        <StyledListForm
          formName="membership"
          items={<MembershipItem />}
          register={register}
          unregister={unregister}
          title={<StyledSubTitle>회원권 항목을 입력해주세요.</StyledSubTitle>}
          control={control}
        />
        <ButtonContainer>
          <StyledButton onClick={modalOnOf(true)}>취소</StyledButton>
          <StyledButton type="submit" primary>
            저장
          </StyledButton>
        </ButtonContainer>
      </StyledListFormContainer>
      <CenterModal
        open={open}
        title="회원권 정보 편집을 취소할까요?"
        description="현재까지 입력한 정보가 반영되지 않아요"
        ok="예"
        cancel="아니요"
        onClickCancel={modalOnOf(false)}
        onClickOk={onClickCancel}
      />
    </Container>
  );
}

export default MembershipRegister;
