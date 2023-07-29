import Certificate from '@/components/register/Certificate';
import RegisterLayout from '@/layouts/RegisterLayout';
import {
  commonStepState,
  profileState,
  proofState,
  teacherStep1State,
} from '@/recoil/register/atom';
import { useRouter } from 'next/router';
import { ReactElement, useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { LectorRegisterRequest } from '@/types/request/register';
import { useLectorRegister } from '@/hooks/queries/register/useLectorRegister';
import { usePostProof } from '@/hooks/queries/register/usePostProof';
import { usePostProfile } from '@/hooks/queries/register/usePostProfile';

function Step2() {
  const [proofList, setProofList] = useRecoilState(proofState);
  const [commonState, setCommonState] = useRecoilState(commonStepState);
  const step1 = useRecoilValue(teacherStep1State);
  const profile = useRecoilValue(profileState);
  const router = useRouter();

  const { mutate: lectorRegister } = useLectorRegister({
    onSuccess: () => {
      router.push('/register//teacher/step3');
    },
  });

  const { mutate: postProof } = usePostProof({
    onSuccess: (data) => {
      const prList: string[] = data.map((d) => d.file_url);
      const lectorRegisterRequest: LectorRegisterRequest = {
        profile: { ...commonState },
        ...step1,
        proof_list: prList,
      };
      lectorRegister(lectorRegisterRequest);
    },
  });

  const { mutate: postProfile } = usePostProfile({
    onSuccess: (data) => {
      setCommonState({ ...commonState, profile_image: data.file_url });
      postProof(proofList);
    },
  });

  const onClickNext = useCallback(
    (files: File[]) => {
      return () => {
        setProofList(files);
        postProfile(profile);
      };
    },
    [setProofList, profile, postProfile]
  );
  return <Certificate type="강사" name="claon2023" onClickNext={onClickNext} />;
}

Step2.getLayout = function getLayout(page: ReactElement) {
  return <RegisterLayout step={99}>{page}</RegisterLayout>;
};

export default Step2;
