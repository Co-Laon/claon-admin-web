import { CenterDetailResponse } from '@/types/response/center';
import { useForm } from 'react-hook-form';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import {
  CenterUploadPurpose,
  utilityList,
  wallEngToKor,
  wallKorToEng,
} from '@/constants';
import { useCenterUploadList } from '@/hooks/queries/register/queryKey';
import {
  CenterUpdateRequest,
  HoldListRequest,
  WallListRequest,
} from '@/types/request/center';
import {
  useDeleteCenter,
  useUpdateCenter,
} from '@/hooks/queries/center/queryKey';

import BasicInfo from '../register/manager/BasicInfo';
import ImageList from '../register/manager/ImageList';
import OperatingTimeTableForm from '../register/manager/OperatingTimeTableForm';
import ChipForm from '../register/manager/ChipForm';
import HoldInfo from '../register/manager/HoldInfo';
import ListForm from '../register/ListForm';
import WallInfoFormItem from '../register/manager/WallInfoFormItem';
import ProfileButton from '../common/profile/ProfileButton';
import * as S from './CenterDetail.styles';
import CenterModal from './CenterModal';

function CenterDetail({
  center_id,
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
  const { register, setValue, unregister, getValues, handleSubmit, control } =
    useForm();
  const [readOnly, setReadOnly] = useState<boolean>(true);
  const [mode, setMode] = useState<'edit' | 'readOnly'>('readOnly');
  const [profile, setProfile] = useState<string | File>(profile_image);
  const [imgs, setImgs] = useState<(string | File)[]>([]);
  const [cancelOpen, setCancelOpen] = useState<boolean>(false);
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const { mutateAsync: mutateCenterProfileUploadList } = useCenterUploadList(
    CenterUploadPurpose.PROFILE
  );
  const { mutateAsync: mutateCenterImageUploadList } = useCenterUploadList(
    CenterUploadPurpose.IMAGE
  );
  const { mutate: mutateUpdateCenter } = useUpdateCenter(center_id);
  const { mutate: mutateDeleteCenter } = useDeleteCenter();

  const rollBackHoldWall = useCallback(() => {
    console.log('roolback');
    if (hold_info) {
      hold_info.hold_list.forEach((v, i) => {
        setValue(`hold_list.${i}.difficulty`, v.difficulty);
        setValue(`hold_list.${i}.name`, v.name);
      });
    }
    if (wall_list) {
      wall_list.forEach((v, i) => {
        setValue(`wall_list.${i}.name`, v.name);
        setValue(`wall_list.${i}.wall_type`, wallEngToKor[v.wall_type]);
      });
    }
  }, [wall_list, hold_info]);

  const rollbackImage = useCallback(() => {
    setProfile(profile_image);
    setImgs(image_list);
  }, [profile_image, image_list]);

  const onClickEdit = useCallback(() => {
    setMode('edit');
    setReadOnly(false);
  }, []);

  const onClickProfile = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) setProfile(Array.from(e.target.files)[0]);
  }, []);

  const onClickSubmit = useCallback(
    (data: any) => {
      Promise.all([
        typeof profile !== 'string'
          ? mutateCenterProfileUploadList([profile])
          : [{ file_url: profile }],
        imgs.length > 0 && typeof imgs[0] !== 'string'
          ? mutateCenterImageUploadList(imgs as File[])
          : imgs.map((i) => ({ file_url: i })),
      ]).then((values) => {
        const [profileImages, images] = values;
        const requests: CenterUpdateRequest = {
          center: {
            ...data.basic,
            profile_image: profileImages[0].file_url,
            image_list: images.map((i) => i.file_url),
            utility_list: data.service,
            operating_time_list: data.timetable,
          },
          hold_info: {
            is_color: !(data.is_color as boolean),
            hold_list: data.hold_list.filter(
              (v: HoldListRequest) => v.difficulty
            ),
          },
          wall_list: data.wall_list
            .filter((v: WallListRequest) => v.wall_type)
            .map((v: WallListRequest) => ({
              wall_type: wallKorToEng[v.wall_type as '볼더링' | '지구력'],
              name: v.name,
            })),
        };
        mutateUpdateCenter(requests);
      });
    },
    [imgs, profile]
  );

  const onChangeImageList = useCallback((imgList: (string | File)[]) => {
    setImgs(imgList);
  }, []);

  const onClickCancel = useCallback(() => {
    setCancelOpen(true);
  }, []);

  const onClickCancelOk = useCallback(() => {
    unregister();
    setMode('readOnly');
    setReadOnly(true);
    rollBackHoldWall();
    rollbackImage();
    setCancelOpen(false);
  }, [profile_image, image_list, hold_info, wall_list]);

  const onClickCancelCancel = useCallback(() => {
    setCancelOpen(false);
  }, []);

  const onClickDelete = useCallback(() => {
    setDeleteOpen(true);
  }, []);
  const onClickDeleteOk = useCallback(() => {
    mutateDeleteCenter(center_id);
  }, []);
  const onClickDeleteCancel = useCallback(() => {
    setDeleteOpen(false);
  }, []);

  useEffect(() => {
    rollbackImage();
  }, [image_list, profile_image]);

  useEffect(() => {
    setReadOnly(true);
    setMode('readOnly');
  }, [center_id]);

  useEffect(() => {
    rollBackHoldWall();
  }, [hold_info, wall_list]);

  return (
    <S.Container onSubmit={handleSubmit(onClickSubmit)}>
      <S.StyledDetailContent>
        <S.StyledTitle>암장 정보 상세</S.StyledTitle>
        <S.SubContainer>
          <S.SubTitle>기본정보</S.SubTitle>
          <ProfileButton
            img={profile}
            onChange={onClickProfile}
            readOnly={readOnly}
          />
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
          <ImageList
            images={imgs || []}
            readOnly={readOnly}
            onChangeImageList={onChangeImageList}
          />
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
            control={control}
          />
        </S.SubContainer>
      </S.StyledDetailContent>
      <S.StyledFooter>
        <S.StyledFooterButtonContainer>
          {readOnly ? (
            <>
              {approved ? (
                <S.StyledButton onClick={onClickEdit} type="button">
                  수정
                </S.StyledButton>
              ) : null}
              <S.StyledButton onClick={onClickDelete}>삭제</S.StyledButton>
            </>
          ) : (
            <>
              <S.StyledButton onClick={onClickCancel}>취소</S.StyledButton>
              <S.StyledButton primary type="submit">
                저장
              </S.StyledButton>
            </>
          )}
        </S.StyledFooterButtonContainer>
      </S.StyledFooter>
      <S.CancelModal
        open={cancelOpen}
        title="암장 정보 편집을 취소할까요?"
        description="현재까지 수정한 정보가 반영되지 않아요"
        cancel="아니요"
        ok="예"
        onClickCancel={onClickCancelCancel}
        onClickOk={onClickCancelOk}
      />
      <S.DeleteModal
        open={deleteOpen}
        title={`[${name}]을 삭제할까요?`}
        description="삭제된 암장정보는 저장되지 않아요"
        cancel="취소"
        ok="삭제"
        onClickCancel={onClickDeleteCancel}
        onClickOk={onClickDeleteOk}
      />
    </S.Container>
  );
}

export default CenterDetail;
