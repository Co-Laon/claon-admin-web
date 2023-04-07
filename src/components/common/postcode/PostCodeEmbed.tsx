import React, { useEffect, useRef, useState } from 'react';
import loadPostcode, {
  PostcodeConstructor,
  postcodeScriptUrl,
} from 'react-daum-postcode/lib/loadPostcode';
import { PostcodeEmbedProps } from './type';

// -------------------Types---------------
/**
 * TODO: React 에서 autoClose 옵션을 사용할 수 없는 이슈가 있음
 * autoClose 를 통한다면, 내부 ref 를 통해 직접 DOM 을 제거하는 ref.current.remove() 를 호출하는데,
 * 이게 현재 React 에서는 동작하지 않음
 */

// -------------------Styles---------------
const defaultStyle = {
  fontSize: '1rem',
  width: '100%',
  height: 480,
};

/**
 * PostcodeEmbed 컴포넌트의 기본 에러 메시지
 */
const defaultErrorMessage = (
  <p>
    현재 Daum 우편번호 서비스를 이용할 수 없습니다. 잠시 후 다시 시도해주세요.
  </p>
);

/**
 * PostcodeEmbed 컴포넌트 function형으로 변경한 컴포넌트
 *
 * @param param0.onComplete - 우편번호 검색 완료시 실행되는 함수
 * @param param0.onClose - 우편번호 검색창이 닫힐 때 실행되는 함수
 * @param param0.onSearch - 우편번호 검색창에서 검색 버튼을 눌렀을 때 실행되는 함수
 * @param param0.className - 우편번호 검색창의 className
 * @param param0.style - 우편번호 검색창의 style
 * @param param0.defaultQuery - 우편번호 검색창의 기본 검색어
 * @param param0.errorMessage - 우편번호 검색창이 에러가 발생했을 때 보여줄 메시지
 * @param param0.scriptUrl - 우편번호 검색창을 불러올 스크립트 URL
 * @param param0.options - 우편번호 검색창의 옵션
 * @returns 우편번호 검색창의 함수형 컴포넌트
 */
function PostCodeEmbed({
  onComplete,
  onClose,
  onSearch,
  className,
  style,
  defaultQuery,
  errorMessage = defaultErrorMessage,
  scriptUrl = postcodeScriptUrl,
  options,
}: PostcodeEmbedProps) {
  const wrap = useRef<HTMLDivElement>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    loadPostcode(scriptUrl)
      .then((Postcode: PostcodeConstructor) => {
        if (!wrap.current) return;
        const postcode = new Postcode({
          ...options,
          oncomplete: (address) => {
            if (onComplete) onComplete(address);
          },
          onsearch: onSearch,
          width: '100%',
          height: '100%',
          onclose: onClose,
        });

        postcode.embed(wrap.current, { q: defaultQuery });
      })
      .catch(() => {
        setHasError(true);
      });
  }, [scriptUrl, options, onComplete, onSearch, onClose, defaultQuery]);

  return (
    <div ref={wrap} className={className} style={{ ...defaultStyle, ...style }}>
      {hasError && errorMessage}
    </div>
  );
}

export default PostCodeEmbed;
