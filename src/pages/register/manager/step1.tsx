import ProfileButton from '@/components/common/profile/ProfileButton';
import RegisterTemplate from '@/components/register/RegisterTemplate';
import styled from '@emotion/styled';
import TextField from '@/components/common/textfield/TextField';
import { useForm } from 'react-hook-form';
import { useCallback, useRef, useState } from 'react';
import { Box, Button, InputAdornment, Modal } from '@mui/material';
import SearchIcon from '@/assets/SearchIcon';
import PlusIcon from '@/assets/PlusIcon';
import PostCodeModal from '@/components/common/postcode/PostCodeModal';
import ListForm from '@/components/register/ListForm';
import CheckboxGroupInput from '@/components/register/CheckboxGroupInput';
import Carousel from 'react-material-ui-carousel';
import DragDrop from '@/components/common/file/DragDrop';
import Image from 'next/image';
import ImageModalEmbed from '@/components/register/manager/ImageModalEmbed';
import ImageListCarousel from '@/components/common/carousel/ImageListCarousel';

const ComponentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
  margin-bottom: 36px;
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

const ChipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;
  gap: 8px;
`;

const StyledChipButton = styled.div`
  background-color: #d0bcff;
  font-size: 16px;
  line-height: 24px;
  weight: 400;
  color: black;
  border: none;
  border-radius: 8px;
  padding: 0px 10px;
`;

const StyledPlusButton = styled.button`
  background-color: #d0bcff;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border: none;
  padding: 0;
`;

const TimeTableInputFormatContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 400;
  padding: 0px;
  gap: 10px;
`;

const ListFormItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 0px;
  isolation: isolate;

  width: 326px;

  background: linear-gradient(
      0deg,
      rgba(103, 80, 164, 0.12),
      rgba(103, 80, 164, 0.12)
    ),
    #fffbfe;
  border-radius: 8px;

  flex: none;
  order: 1;
  flex-grow: 1;
`;

const ListFormPriceInput = styled(TextField)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 96px;
  height: 36px;

  border-radius: 4px 4px 0px 0px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const centerImageModalStyle = {
  position: 'absolute' as const,
  width: '500px',
  height: '500px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background:
    'linear-gradient(0deg, rgba(113, 90, 174, 0.11), rgba(113, 90, 174, 0.11)), #FFFBFE',
};

interface RegularHoliday {
  day: string;
  startTime: string;
  endTime: string;
}

interface Charge {
  name: string;
  price: number;
  count: number;
}

interface ColoredHold {
  color: string;
  holdName: string;
}

interface OtherHold {
  difficulty: string;
  holdName: string;
}

interface ClimbInfo {
  type: '볼더링' | '지구력';
  name: string;
}

interface Step2FormProps {
  centerName: string;
  centerAddress: string;
  centerDetailAddress: string;
  centerPhone: string;
  centerHomepage: string;
  centerInstagram: string;
  centerYoutube: string;
  centerImage: string;
  centerRegularHoliday: RegularHoliday[];
  centerService:
    | '유료주차'
    | '무료주차'
    | '와이파이'
    | '사물함'
    | '탈의실'
    | '휴게실'
    | '운동복'
    | '수건'
    | '스트레칭 존'
    | '트레이닝 존'[];
  centerCharge: Charge[];
  holdType: '색' | '다르게';
  holdDifficulties: ColoredHold[] | OtherHold[];
  climbInfo: ClimbInfo[];
}

function RegisterManagerPage() {
  const name = '암장 관리자';
  const selectedDayOfWeek = [
    '월',
    '화',
    '수',
    '목',
    '금',
    '토',
    '일',
    '공휴일',
  ];
  const regularHolidaysList = [
    '월',
    '화',
    '수',
    '목',
    '금',
    '토',
    '일',
    '공휴일',
  ];
  const serviceList = [
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
  const chargeList = [1, 2, 3];
  const chargeImageList = [1, 2, 3];
  const imageList = [1, 2, 3];

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    unregister,
  } = useForm();

  const [postModalOpen, setPostModalOpen] = useState(false);

  const [centerImageModalOpen, setCenterImageModalOpen] = useState(false);

  const postcodeTextFieldRef = useRef<HTMLInputElement>(null);

  const onSubmit = useCallback((data: any) => {
    console.dir(data);
  }, []);

  const handlePostInputClick = useCallback(() => {
    setPostModalOpen(true);
  }, []);

  const handlePostModalComplete = useCallback((address?: string) => {
    if (postcodeTextFieldRef.current && address) {
      postcodeTextFieldRef.current.value = address;
    }
    setPostModalOpen(false);
  }, []);

  const handlePostModalClose = useCallback(() => {
    setPostModalOpen(false);
  }, []);

  const handleCenterImageAddButtonClick = useCallback(() => {
    setCenterImageModalOpen(true);
  }, []);

  const handleImageModalClose = useCallback(() => {
    setCenterImageModalOpen(false);
  }, []);

  const handleImageModalComplete = useCallback(() => {}, []);

  return (
    <ComponentWrapper>
      <RegisterTemplate step={66}>
        <Title>{`${name}님
        암장을 소개해주세요.`}</Title>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <BetweenWrapper alignItems="end">
            <ProfileButton />
            <StyledSmallButton>
              <SearchIcon width={12} height={12} /> 기존 암장
            </StyledSmallButton>
          </BetweenWrapper>
          <TextField
            label="이름"
            isRequire="이름을 작성해 주세요."
            placeholder="클라온"
            register={register}
            formKey="name"
            error={errors}
            minLength={{
              value: 2,
              message: '이름은 2~30자 이내로 작성해 주세요.',
            }}
            maxLength={{
              value: 30,
              message: '이름은 2~30자 이내로 작성해 주세요.',
            }}
          />
          <TextField
            label="주소"
            isRequire="주소를 작성해 주세요."
            register={register}
            formKey="address"
            error={errors}
            onClick={handlePostInputClick}
            ref={postcodeTextFieldRef}
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
            error={errors}
          />
          <TextField
            label="전화번호"
            isRequire="전화번호를 작성해 주세요."
            placeholder="010-1234-5678"
            register={register}
            formKey="tel"
            error={errors}
            pattern={{
              value: /^\d{2,3}-\d{3,4}-\d{4}$/,
              message: '올바른 전화번호를 입력해 주세요.',
            }}
          />
          <TextField
            label="웹"
            register={register}
            formKey="web_url"
            error={errors}
            pattern={{
              value:
                /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
              message: '올바른 웹 주소를 입력해 주세요.',
            }}
          />
          <TextField
            label="인스타그램 계정"
            register={register}
            formKey="instagram_name"
            error={errors}
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
            register={register}
            formKey="youtube_code"
            error={errors}
          />
          <BetweenWrapper alignItems="center">
            <div>
              <NormalText>암장 모습을 보여주세요.</NormalText>
              <SmallText>최대 10장까지 업로드 가능해요.</SmallText>
            </div>
            <StyledPlusButton onClick={handleCenterImageAddButtonClick}>
              <PlusIcon width={12} height={12} />
            </StyledPlusButton>
          </BetweenWrapper>
          <Modal
            open={centerImageModalOpen}
            onClose={handleImageModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={centerImageModalStyle}>
              <ImageModalEmbed
                title="암장"
                onComplete={handleImageModalComplete}
              />
            </Box>
          </Modal>
          <ImageListCarousel images={watch('image_list', [])} />
          <div>
            <NormalText>정기 휴무일이 있나요?</NormalText>
            <SmallText>쉬는 날을 선택해주세요.</SmallText>
          </div>
          <ChipContainer>
            {regularHolidaysList.map((day) => (
              <StyledChipButton>{day}</StyledChipButton>
            ))}
          </ChipContainer>
          <NormalText>이용 시간을 입력해주세요.</NormalText>
          {selectedDayOfWeek.map((day) => (
            <TimeTableInputFormatContainer>
              {day}
              <TextField
                label="시작시간"
                isRequire="10:00"
                register={register}
                formKey={`${day}Start`}
                error={errors}
              />
              ~
              <TextField
                label="종료시간"
                isRequire="22:00"
                register={register}
                formKey={`${day}End`}
                error={errors}
              />
            </TimeTableInputFormatContainer>
          ))}
          <div>
            <NormalText>제공하는 서비스를 선택해주세요.</NormalText>
            <SmallText>중복 선택 가능해요.</SmallText>
          </div>
          <ChipContainer>
            {serviceList.map((service) => (
              <StyledChipButton key={service}>{service}</StyledChipButton>
            ))}
          </ChipContainer>
          <div>
            <NormalText>이용요금을 알려주세요.</NormalText>
            <SmallText>최대 5장까지 업로드 가능해요.</SmallText>
          </div>
          <ImageListCarousel images={watch('charge_list', [])} />
          <ListForm
            title={<NormalText>이용요금을 항목을 입력해주세요.</NormalText>}
            items={
              <ListFormItemContainer>
                <TextField
                  label="요금명"
                  isRequire="요금명을 작성해 주세요."
                  register={register}
                  formKey="chargeName"
                  error={errors}
                />
                <div>
                  <TextField
                    label="가격"
                    isRequire=""
                    defaultValue="14000"
                    register={register}
                    formKey="chargePrice"
                    error={errors}
                    sx={{ width: '96px', height: '36px' }}
                    endAdornment={
                      <InputAdornment position="end">원</InputAdornment>
                    }
                  />
                  <TextField
                    label="횟수"
                    isRequire=""
                    defaultValue="1"
                    register={register}
                    formKey="chargeName"
                    error={errors}
                    sx={{ width: '60px', height: '36px' }}
                    endAdornment={
                      <InputAdornment position="end">회</InputAdornment>
                    }
                  />
                </div>
              </ListFormItemContainer>
            }
            formName="chargeList"
            register={register}
            unregister={unregister}
          />
          <CheckboxGroupInput
            title={<NormalText>홀드 난이도를 어떻게 표현하나요?</NormalText>}
            checkboxes={['색으로 표현해요', '다르게 표현해요']}
            register={register}
            formKey="holdType"
          />
          <ListForm
            title={
              <div>
                <NormalText>홀드 난이도를 알려주세요.</NormalText>
                <SmallText>쉬운 난이도를 먼저 입력해주세요.</SmallText>
              </div>
            }
            items={
              <ListFormItemContainer>
                <div>
                  <TextField
                    label="가격"
                    isRequire="14000"
                    register={register}
                    formKey="chargePrice"
                    error={errors}
                  />
                  <TextField
                    label="횟수"
                    isRequire="1"
                    register={register}
                    formKey="chargeName"
                    error={errors}
                  />
                </div>
              </ListFormItemContainer>
            }
            formName="chargeList"
            register={register}
            unregister={unregister}
          />
          <ListForm
            items={
              <ListFormItemContainer>
                <div>
                  <TextField
                    label="유형"
                    isRequire="14000"
                    register={register}
                    formKey="chargePrice"
                    error={errors}
                  />
                  <TextField
                    label="이름"
                    isRequire="1"
                    register={register}
                    formKey="chargeName"
                    error={errors}
                  />
                </div>
              </ListFormItemContainer>
            }
            formName="climbInfoList"
            register={register}
            title={
              <div>
                <NormalText>암벽 정보를 알려주세요.</NormalText>
              </div>
            }
            unregister={unregister}
          />
          <StyledButton type="submit">다음</StyledButton>
        </StyledForm>
      </RegisterTemplate>
    </ComponentWrapper>
  );
}
export default RegisterManagerPage;
