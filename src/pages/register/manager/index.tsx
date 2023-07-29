import ProfileButton from '@/components/common/profile/ProfileButton';
import styled from '@emotion/styled';
import TextField from '@/components/common/textfield/TextField';
import { useForm } from 'react-hook-form';
import {
  ChangeEvent,
  ReactElement,
  useCallback,
  useRef,
  useState,
} from 'react';
import { Button } from '@mui/material';
import SearchIcon from '@/assets/SearchIcon';
import PostCodeModal from '@/components/common/postcode/PostCodeModal';
import ListForm from '@/components/register/ListForm';
import ImageListCarousel from '@/components/common/carousel/ImageListCarousel';
import RegisterLayout from '@/layouts/RegisterLayout';
import OperatingTimeTableForm from '@/components/register/manager/OperatingTimeTableForm';
import ChipForm from '@/components/register/manager/ChipForm';
import AddIcon from '@/assets/AddIcon';
import { ColorResult } from 'react-color';
import HoldDifficultyFormItem from '@/components/register/manager/HoldDifficultyFormItem';
import WallInfoFormItem from '@/components/register/manager/WallInfoFormItem';
import FeeInfoFormItem from '@/components/register/manager/FeeInfoFormItem';
import ImageModal from '@/components/register/manager/ImageModal';
import ColorPickerModal from '@/components/register/manager/ColorPickerModal';
import HoldTypeSelect from '@/components/register/manager/HoldTypeSelect';
import HoldColorFormItem from '@/components/register/manager/HoldColorFormItem';
import SearchCenterModal from '@/components/register/manager/SearchCenterModal';

import { CenterUploadPurpose } from '@/constants';
import {
  useCenterSignUp,
  useCenterUploadList,
} from '@/hooks/queries/register/queryKey';
import { CenterNameResponse } from '@/types/common/center';
import { CenterAuthRequest } from '@/types/request/register';
import Certificate from '@/components/register/Certificate';

const Title = styled.p`
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
`;

const NormalText = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
`;

const SmallText = styled.p`
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  margin-bottom: 8px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: start;
  gap: 30px;
`;

const BetweenWrapper = styled.div<{ alignItems: 'start' | 'center' | 'end' }>`
  display: flex;
  justify-content: space-between;
  align-items: ${({ alignItems }) => alignItems};
`;

const StyledSmallButton = styled(Button)`
  background-color: #d0bcff;
  width: 72px;
  height: 24px;
  color: black;
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  padding: 0;
`;

const StyledButton = styled(Button)`
  background-color: #d0bcff;
  width: 100%;
  color: black;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  border-radius: 8px;
`;

const StyledPlusButton = styled.button`
  background-color: #d0bcff;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border: none;
  padding: 0;
`;

// --------------------interface--------------------

enum HoldType {
  COLOR,
  OTHER,
}

// --------------------example data--------------------
const name = '암장 관리자';

const utilityList = [
  '유료주차',
  '무료주차',
  '와이파이',
  '사물함',
  '탈의실',
  '휴게실',
  '운동복',
  '수건',
  '스트레칭 존',
  '트레이닝 존',
];

function Page() {
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
    unregister,
    control,
  } = useForm();

  const [isStep1, setIsStep1] = useState(true);

  const [holdType, setHoldType] = useState<HoldType>(HoldType.COLOR);

  const [centerProfileImage, setCenterProfileImage] = useState<File>();

  const [centerSearchModalOpen, setCenterSearchModalOpen] = useState(false);

  const [postModalOpen, setPostModalOpen] = useState(false);

  const [centerImageModalOpen, setCenterImageModalOpen] = useState(false);

  const [centerImageList, setCenterImageList] = useState<File[]>([]);

  const [feeImageModalOpen, setFeeImageModalOpen] = useState(false);

  const [feeImageList, setFeeImageList] = useState<File[]>([]);

  const [colorPickerModalOpen, setColorPickerModalOpen] = useState(false);

  // 이름 검색 input ref
  const nameTextFieldRef = useRef<HTMLInputElement>();

  // 우편번호 검색 input ref
  const postcodeTextFieldRef = useRef<HTMLInputElement>();

  // 홀드 난이도 색 input formKey
  const [holdColorTextFieldFormKey, setHoldColorTextFieldFormKey] =
    useState<string>('');

  const { mutateAsync: mutateCenterProfileUploadList } = useCenterUploadList(
    CenterUploadPurpose.PROFILE
  );

  const { mutateAsync: mutateCenterImageUploadList } = useCenterUploadList(
    CenterUploadPurpose.IMAGE
  );

  const { mutateAsync: mutateCenterFeeUploadList } = useCenterUploadList(
    CenterUploadPurpose.FEE
  );

  const { mutateAsync: mutateCenterProofUploadList } = useCenterUploadList(
    CenterUploadPurpose.PROOF
  );

  const { mutate: mutateCenterSignUp } = useCenterSignUp();

  const handleClickNextButton = useCallback(() => {
    setIsStep1(false);
  }, []);

  const onSubmitButtonClick = useCallback(
    (files: File[]) => {
      return () =>
        Promise.all([
          mutateCenterProfileUploadList(
            centerProfileImage ? [centerProfileImage] : []
          ),
          mutateCenterImageUploadList(centerImageList),
          mutateCenterFeeUploadList(feeImageList),
          mutateCenterProofUploadList(files),
        ]).then((values) => {
          const [profileImages, images, feeImages, proofImages] = values;

          setValue('profile_image', profileImages[0].file_url);
          setValue(
            'image_list',
            images.map((image) => image.file_url)
          );
          setValue(
            'fee_image_list',
            feeImages.map((fee) => fee.file_url)
          );
          setValue(
            'proof_list',
            proofImages.map((proof) => proof.file_url)
          );

          mutateCenterSignUp(getValues() as CenterAuthRequest);
        });
    },
    [
      mutateCenterProfileUploadList,
      mutateCenterImageUploadList,
      mutateCenterFeeUploadList,
      setValue,
    ]
  );

  const handleProfileImageChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        setCenterProfileImage(Array.from(e.target.files)[0]);
      }
    },
    []
  );

  // 기존 암장 검색 모달 관련 핸들러
  const handleCenterButtonClick = useCallback(() => {
    setCenterSearchModalOpen(true);
  }, []);

  const handleCenterSearchModalClose = useCallback(() => {
    setCenterSearchModalOpen(false);
  }, []);

  const handleCenterSearchModalComplete = useCallback(
    (center: CenterNameResponse) => {
      if (nameTextFieldRef.current && center) {
        nameTextFieldRef.current.value = center.name;
      }
      if (postcodeTextFieldRef.current && center) {
        postcodeTextFieldRef.current.value = center.address;
      }
      setCenterSearchModalOpen(false);
    },
    []
  );

  // 우편번호 검색 모달 관련 핸들러
  const handlePostInputClick = useCallback(() => {
    setPostModalOpen(true);
  }, []);

  const handlePostModalClose = useCallback(() => {
    setPostModalOpen(false);
  }, []);

  const handlePostModalComplete = useCallback((address?: string) => {
    if (postcodeTextFieldRef.current && address) {
      postcodeTextFieldRef.current.value = address;
    }
    setPostModalOpen(false);
  }, []);

  // 암장 이미지 모달 핸들러
  const handleCenterImageAddButtonClick = useCallback(() => {
    setCenterImageModalOpen(true);
  }, []);

  const handleCenterImageModalClose = useCallback(() => {
    setCenterImageModalOpen(false);
  }, []);

  const handleCenterImageModalComplete = useCallback(
    (centerImages: (File | string)[]) => {
      setCenterImageList(centerImages as File[]);
    },
    []
  );

  // 요금 이미지 추가 모달 핸들러
  const handleFeeImageAddButtonClick = useCallback(() => {
    setFeeImageModalOpen(true);
  }, []);

  const handleFeeImageModalClose = useCallback(() => {
    setFeeImageModalOpen(false);
  }, []);

  const handleFeeImageModalComplete = useCallback(
    (feeImages: (string | File)[]) => {
      setFeeImageList(feeImages as File[]);
    },
    []
  );

  // 홀드 타입 변경 핸들러
  const handleHoldTypeChange = useCallback(
    (value: number) => {
      setHoldType(value);
      unregister('hold_list', { keepDirty: false, keepTouched: false });
    },
    [unregister]
  );

  // color picker 핸들러
  const handleColorPickerInputClick = useCallback((key: string) => {
    setHoldColorTextFieldFormKey(key);
    setColorPickerModalOpen(true);
  }, []);

  const handleColorPickerModalClose = useCallback(() => {
    setColorPickerModalOpen(false);
  }, []);

  const handleColorPickerModalComplete = useCallback(
    (color: ColorResult) => {
      setValue(holdColorTextFieldFormKey, color.hex);
      setColorPickerModalOpen(false);
    },
    [setValue, holdColorTextFieldFormKey]
  );

  // 홀드 난이도 색 변경 값
  const isHoldSetColor = holdType === 0;

  if (isStep1)
    return (
      <StyledForm onSubmit={handleSubmit(handleClickNextButton)}>
        <div>
          <Title>{`${name}님`}</Title>
          <Title>암장을 소개해주세요.</Title>
        </div>
        <BetweenWrapper alignItems="end">
          <ProfileButton
            onChange={handleProfileImageChange}
            img={centerProfileImage}
            isCenterProfile
          />
          <StyledSmallButton onClick={handleCenterButtonClick}>
            <SearchIcon width={12} height={12} /> 기존 암장
          </StyledSmallButton>
        </BetweenWrapper>
        <SearchCenterModal
          open={centerSearchModalOpen}
          onClose={handleCenterSearchModalClose}
          onComplete={handleCenterSearchModalComplete}
        />
        <TextField
          label="이름"
          isRequire="이름을 작성해 주세요."
          placeholder="클라온"
          register={register}
          formKey="name"
          error={errors && 'name' in errors ? errors.name : undefined}
          minLength={{
            value: 2,
            message: '이름은 2~30자 이내로 작성해 주세요.',
          }}
          maxLength={{
            value: 30,
            message: '이름은 2~30자 이내로 작성해 주세요.',
          }}
          inputRef={nameTextFieldRef}
        />
        <TextField
          label="주소"
          isRequire="주소를 작성해 주세요."
          register={register}
          formKey="address"
          error={errors && 'address' in errors ? errors.address : undefined}
          onClick={handlePostInputClick}
          inputRef={postcodeTextFieldRef}
        />
        <PostCodeModal
          open={postModalOpen}
          onComplete={handlePostModalComplete}
          onClose={handlePostModalClose}
        />
        <TextField
          label="상세 주소"
          register={register}
          formKey="detail_address"
          error={
            errors && 'detail_address' in errors
              ? errors.detail_address
              : undefined
          }
        />
        <TextField
          label="전화번호"
          isRequire="전화번호를 작성해 주세요."
          placeholder="02-0000-0000"
          register={register}
          formKey="tel"
          error={errors && 'tel' in errors ? errors.tel : undefined}
          pattern={{
            value: /^\d{2,3}-\d{3,4}-\d{4}$/,
            message: '올바른 전화번호를 입력해 주세요.',
          }}
        />
        <TextField
          label="웹"
          placeholder="admin.claon.life"
          register={register}
          formKey="web_url"
          error={errors && 'web_url' in errors ? errors.web_url : undefined}
          pattern={{
            value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
            message: '올바른 웹 주소를 입력해 주세요.',
          }}
        />
        <TextField
          label="인스타그램 계정"
          placeholder="claon_official"
          register={register}
          formKey="instagram_name"
          error={
            errors && 'instagram_name' in errors
              ? errors.instagram_name
              : undefined
          }
          pattern={{
            value: /^[a-zA-Z0-9_.]*$/i,
            message: '영어, 숫자, 언더바, 마침표만 입력 가능합니다.',
          }}
          minLength={{
            value: 3,
            message: '인스타그램 계정은 3~30자 이내로 작성해주세요.',
          }}
          maxLength={{
            value: 30,
            message: '인스타그램 계정은 3~30자 이내로 작성해주세요.',
          }}
        />
        <TextField
          label="유튜브"
          placeholder="@claon"
          register={register}
          formKey="youtube_code"
          error={
            errors && 'youtube_code' in errors ? errors.youtube_code : undefined
          }
        />
        <BetweenWrapper alignItems="center">
          <div>
            <NormalText>암장 모습을 보여주세요.</NormalText>
            <SmallText>최대 10장까지 업로드 가능해요.</SmallText>
          </div>
          <StyledPlusButton onClick={handleCenterImageAddButtonClick}>
            <AddIcon width={24} height={24} />
          </StyledPlusButton>
        </BetweenWrapper>
        <ImageModal
          title="암장"
          open={centerImageModalOpen}
          onClose={handleCenterImageModalClose}
          onComplete={handleCenterImageModalComplete}
        />
        <ImageListCarousel images={centerImageList} width={360} height={200} />
        <div>
          <NormalText>정기 휴무일이 있나요?</NormalText>
          <SmallText>쉬는 날을 선택해주세요.</SmallText>
        </div>
        <OperatingTimeTableForm
          register={register}
          unregister={unregister}
          formKey="operating_time_list"
          error={errors}
        />
        <div>
          <NormalText>제공하는 서비스를 선택해주세요.</NormalText>
          <SmallText>중복 선택 가능해요.</SmallText>
        </div>
        <ChipForm
          items={utilityList}
          formKey="utility_list"
          setValue={setValue}
        />
        <BetweenWrapper alignItems="center">
          <div>
            <NormalText>이용요금을 알려주세요.</NormalText>
            <SmallText>최대 5장까지 업로드 가능해요.</SmallText>
          </div>
          <StyledPlusButton onClick={handleFeeImageAddButtonClick}>
            <AddIcon width={24} height={24} />
          </StyledPlusButton>
        </BetweenWrapper>
        <ImageModal
          title="암장 이용요금"
          open={feeImageModalOpen}
          onClose={handleFeeImageModalClose}
          onComplete={handleFeeImageModalComplete}
        />
        <ImageListCarousel images={feeImageList} width={360} />
        <ListForm
          title={<NormalText>이용요금을 항목을 입력해주세요.</NormalText>}
          items={<FeeInfoFormItem />}
          formName="fee_list"
          register={register}
          unregister={unregister}
          control={control}
        />
        <HoldTypeSelect
          title={<NormalText>홀드 난이도를 어떻게 표현하나요?</NormalText>}
          checkboxes={['색으로 표현해요', '다르게 표현해요']}
          defaultValue={holdType}
          onInputChange={handleHoldTypeChange}
        />
        {isHoldSetColor && (
          <ListForm
            title={
              <div>
                <NormalText>홀드 난이도를 알려주세요.</NormalText>
                <SmallText>쉬운 난이도를 먼저 입력해주세요.</SmallText>
              </div>
            }
            items={
              <HoldColorFormItem
                formKey="hold_list"
                getValues={getValues}
                onClickTextField={handleColorPickerInputClick}
              />
            }
            formName="hold_list"
            register={register}
            unregister={unregister}
            control={control}
          />
        )}
        {!isHoldSetColor && (
          <ListForm
            title={
              <div>
                <NormalText>홀드 난이도를 알려주세요.</NormalText>
                <SmallText>쉬운 난이도를 먼저 입력해주세요.</SmallText>
              </div>
            }
            items={<HoldDifficultyFormItem />}
            formName="hold_list"
            register={register}
            unregister={unregister}
            control={control}
          />
        )}
        <ColorPickerModal
          open={colorPickerModalOpen}
          onClose={handleColorPickerModalClose}
          onChangeComplete={handleColorPickerModalComplete}
        />
        <ListForm
          items={<WallInfoFormItem />}
          formName="wall_list"
          register={register}
          title={
            <div>
              <NormalText>암벽 정보를 알려주세요.</NormalText>
            </div>
          }
          unregister={unregister}
          control={control}
        />
        <StyledButton onClick={handleClickNextButton}>다음</StyledButton>
      </StyledForm>
    );

  return (
    <Certificate type="관리자" name="" onClickNext={onSubmitButtonClick} />
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <RegisterLayout step={66}>{page}</RegisterLayout>;
};

export default Page;
