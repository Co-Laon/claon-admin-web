import { CenterDetailResponse } from '@/types/response/center';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useCallback, useEffect, useState } from 'react';
import { utilityList } from '@/constants';
import * as S from './CenterDetail.styles';
import TextField from '../common/textfield/TextField';
import BasicInfo from '../register/manager/BasicInfo';
import ImageList from '../register/manager/ImageList';
import OperatingTimeTableForm from '../register/manager/OperatingTimeTableForm';
import ChipForm from '../register/manager/ChipForm';
import HoldInfo from '../register/manager/HoldInfo';
import ListForm from '../register/ListForm';
import WallInfoFormItem from '../register/manager/WallInfoFormItem';

function CenterDetail({
  address,
  detail_address,
  hold_info,
  image_list,
  instagram_name,
  name,
  operating_time_list,
  utility_list,
  profile_image,
  tel,
  wall_list,
  web_url,
  youtube_code,
  approved,
}: CenterDetailResponse) {
  const { register, setValue, unregister, getValues, resetField } = useForm();
  const [readOnly, setReadOnly] = useState<boolean>(true);
  const [mode, setMode] = useState<'edit' | 'readOnly'>('readOnly');

  const onClickButton = useCallback(() => {
    setReadOnly(false);
    setMode('edit');
  }, []);

  useEffect(() => {
    if (hold_info) {
      hold_info.hold_list.forEach((v, i) => {
        setValue(`hold_list.${i}.difficulty`, v.difficulty);
        setValue(`hold_list.${i}.name`, v.name);
      });
    }
    if (wall_list) {
      wall_list.forEach((v, i) => {
        setValue(`wall_list.${i}.name`, v.name);
        setValue(`wall_list.${i}.wall_type`, '볼더링');
      });
    }
  }, [hold_info, wall_list]);

  return (
    <S.Container>
      <S.StyledDetailContent>
        <S.StyledTitle>암장 정보 상세</S.StyledTitle>
        <S.SubContainer>
          <S.SubTitle>기본정보</S.SubTitle>
          <Image src={profile_image} width={64} height={64} alt="profile" />
          <BasicInfo
            address={address}
            detail_address={detail_address}
            formKey="basic"
            instagram_name={instagram_name}
            mode={mode}
            name={name}
            register={register}
            setValue={setValue}
            tel={tel}
            web_url={web_url}
            youtube_code={youtube_code}
          />
        </S.SubContainer>
        <S.SubContainer>
          <S.SubTitle>대표 사진</S.SubTitle>
          <ImageList images={image_list || []} />
        </S.SubContainer>
        <S.SubContainer>
          <S.SubTitle>정기 휴무일</S.SubTitle>
          <OperatingTimeTableForm
            formKey="timetable"
            register={register}
            unregister={unregister}
            setValue={setValue}
            timeTables={operating_time_list}
            readOnly={readOnly}
          />
        </S.SubContainer>
        <S.SubContainer>
          <S.SubTitle>제공 서비스</S.SubTitle>
          <ChipForm
            formKey="service"
            items={utilityList}
            setValue={setValue}
            value={utility_list}
            readOnly={readOnly}
          />
        </S.SubContainer>
        <S.SubContainer>
          <HoldInfo
            register={register}
            unregister={unregister}
            title1="홀드 정보"
            title2="홀드 유형"
            getValues={getValues}
            readOnly={readOnly}
            setValue={setValue}
            defaultValue={hold_info}
          />
        </S.SubContainer>
        <S.SubContainer>
          <ListForm
            formName="wall_list"
            items={<WallInfoFormItem />}
            register={register}
            title={<S.SubTitle>암벽 정보</S.SubTitle>}
            unregister={unregister}
            readOnly={readOnly}
            defaultValues={wall_list}
            setValue={setValue}
            resetField={resetField}
          />
        </S.SubContainer>
      </S.StyledDetailContent>
      <S.StyledFooter>
        <S.StyledFooterButtonContainer>
          {readOnly ? (
            <>
              {approved ? (
                <S.StyledButton onClick={onClickButton}>수정</S.StyledButton>
              ) : null}
              <S.StyledButton>삭제</S.StyledButton>
            </>
          ) : (
            <>
              <S.StyledButton>취소</S.StyledButton>
              <S.StyledButton primary>저장</S.StyledButton>
            </>
          )}
        </S.StyledFooterButtonContainer>
      </S.StyledFooter>
    </S.Container>
  );
}

export default CenterDetail;
