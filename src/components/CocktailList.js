import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.ul`
  color: pink;
  grid-template-columns: repeat(3, 1fr);
  display: grid;
  gap: 40px;
  list-style-type: none;
  padding-left: 0;
`;

const Cocktail = styled.li`

`;

const CocktailImage = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border: 1px solid #CA0000;
`;


const CocktailList = () => {
  // const { cocktails } = useCocktialContext();

  return (
    <Wrapper>
    <Cocktail>
      <CocktailImage src="https://s3-alpha-sig.figma.com/img/a04c/f473/e03cb11d23454f75704900acf7b96af1?Expires=1661126400&Signature=T6l7m35U2O~kdukdKvcwlSSVUPtgX9jv6nIisK~Ns9H9HjBUVGe8~M-KLw6Yxsu1IHGSQ2Zl6OWG77NWLArQxNbqvwAwlaxOpTuO1NaUlqcOGgdSuVCIe-X3tfirNTgu0LYLcpVFY4D-0F3mlLZsedIF1pHeq1Hvs6PDNpvVTjUtmhEpezXiqbaTIdV-HiFf0qyR7mvI-zzCQb-9SpBlgQ2ONFFhhoW2alGOgOj5GpjeUa6xFyw2GtRXW~A3gp1i87NYY7rsDG3wC5ga1VzuLhWneS9fnoAjWTtkinAB327~8aPvjR~bICeQVdPmJRgmUp2wLNzJfbxtbvKgJ0i5Ew__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="rum" />
    </Cocktail>
    <Cocktail>
      <CocktailImage src="https://s3-alpha-sig.figma.com/img/a0df/6fa6/27cdad593483001ab7c7c85db8a5aef1?Expires=1661126400&Signature=ZyrQdl874KJItL3Lbky2d3aYek9szgVIRoc1zQKaEuCp3vgKSH8DvUIyQcbfginEfJVDrqT73XxCpAV6r4jZ8Nkc4mpewxPpuGbdejceUdFm1P8Rzvb-sB~FU68NLyOk3P48mBUcoM6HYCxJTJhD9Guz4Iyq-9OnjBx75YNNanqQJZVpd1y02y2LJbHLbd5vloL-b2zlO996riOjMVpc-Rl1Ow~bZFa90vG-~YqhhvkWGUMzcGj9rnmh~V04gh46HohjOSFNAT0WgqsCLtCeDiUUnlsVCDt7QjJPzyMXaB0BrlnkG5yymnkEH~mf1BRhddhheNcfK9OOXaGELoidlg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="cosmo" />
    </Cocktail>
    <Cocktail>
      <CocktailImage src="https://s3-alpha-sig.figma.com/img/1f0d/0ebb/03161d70436917176fdee64304b1472b?Expires=1661126400&Signature=YO2Lf3Z~2o1r1x~JzKpTo1pMe0qnKM8mLDnIcVsO5-AnG7~IrBAB15ZpuEvDkguJbiTMgr0LdMgyuiA3tmUkCRJy~67Qsh4y2VLFHkkArEtSGkbX459Ej3oepZcw-yRy75u1xNdcIf~lSNY9c2PtZh9XplpGN464r60rxQ1fiU7QqG5iqEdbTmnQLGZtbbfBj0tLiktoaE4t~jV5Y~qCvY-Flrm4lW-hqfbVlbhfXXNC-ok~UvQ3acJ0IkyzfHxvt6kP4J9ijdPMzRdyKtB8IZRJ5JSwyTHX2RjVq6iG9W0jkwHLMr8yNUpEUJsX~2qOTstgkjnjNyNLBuugkHXLaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="sunrise" />
    </Cocktail>
    <Cocktail>
      <CocktailImage src="https://s3-alpha-sig.figma.com/img/c777/e5b5/2e474059fe3922ddc038e6d7e649ff4a?Expires=1661126400&Signature=f4sEXTcbRDXs6km0aWRhlcFt9Bfv3Ifl0IJ9AZ6-OqQkubTz11ymeUGXff6EeM1wz4M-prPjSiwX6F6W6~QivF8DDGmTtgjkEvxHLifePrYTV8vDVj8~QLPEaEOAtXfSYDS4Zr5p5wadNNp2x6cwn2-RtGmWFLORDqbkogJ4EzYOc-NCZu31~I5nPNNM4b1mTbGSfl5xtFkPvFfW8qWx4NfANqPWMO~0sl48Sp9fp5GHZwCKXRtptRIa~YEa1qhCERDt88CmFWVbARWQDxv1SMk5OUV7ONLhGqwarrDPpSGv5A6EcJCRfp~Kis0VadrjIeyPpfBusgoig~hV3fagFA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="fashioned" />
    </Cocktail>
    <Cocktail>
      <CocktailImage src="https://s3-alpha-sig.figma.com/img/f7d3/ddd5/d7e720d05a7ceef117b8a60917a05d90?Expires=1661126400&Signature=OFgW9Vv1sTUlDIsVgFKNDxQ9LisnjbZp9skVmf7VV6sn~bDqvJyofAeLcAfQjY6HwXYO4Sdq6JSPylEh3PI0VzXafxwDiBkFw75A57LgxyDJKVxZP6-hPBRe4xiO4e36QSECJ8F4lSrmmLu79nhztWf9al7QtEnQ6PuZ6zRbzGp-14Tu5ajNEvzOlG~jztZkZ0HLKYyWgiEPxW0uodAfE643S~QsjIfItnGFKBxzJ~H-5XD2IBgSb3-NgLIK38YPmckiIruzaCZOUbRHZfmCHuU0Wbzvs5x1GLRtKEoKCtf~fDesbXlVDNl~Fak11P2f3g0NxXuuxTFsAhng17yO-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="tiki" />
    </Cocktail>
    <Cocktail>
      <CocktailImage src="https://s3-alpha-sig.figma.com/img/0a1b/6f5f/dbeb93f39aa243ad0855ed3bc9833fb9?Expires=1661126400&Signature=f5rnZk-mSYyxaIME-wbB7JXRzyg6x1VSezCFcKOr6Zfav-JLtTF~s2~n~Vyh7hEY4L-R51XVIYQWzqMYpZeV0p~Bh0PZIYz1DlwzsmFk6ui5m6wdXpunY~zdieyhTLLfscdd4xzlnhqutJak5BdkluRJs1p5z8U~7QYmUKk9Gamck3dZHtwBskKg8zpIcGNbQvii47xxrpPuamyONQ3H5Ukhb0YCc7a3peUEyLIkT329QW0HNdJv58s0joGN7I4LEwxZFQNNFRZ6NKLSwBKupffCjqbe1Mo-rsEfEICezzTghU6Ff25L4wxoerLKDplpj5hJfxgAcXQjgXeoaQkQyQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="vodka" />
    </Cocktail>
    <Cocktail>
      <CocktailImage src="https://s3-alpha-sig.figma.com/img/c777/e5b5/2e474059fe3922ddc038e6d7e649ff4a?Expires=1661126400&Signature=f4sEXTcbRDXs6km0aWRhlcFt9Bfv3Ifl0IJ9AZ6-OqQkubTz11ymeUGXff6EeM1wz4M-prPjSiwX6F6W6~QivF8DDGmTtgjkEvxHLifePrYTV8vDVj8~QLPEaEOAtXfSYDS4Zr5p5wadNNp2x6cwn2-RtGmWFLORDqbkogJ4EzYOc-NCZu31~I5nPNNM4b1mTbGSfl5xtFkPvFfW8qWx4NfANqPWMO~0sl48Sp9fp5GHZwCKXRtptRIa~YEa1qhCERDt88CmFWVbARWQDxv1SMk5OUV7ONLhGqwarrDPpSGv5A6EcJCRfp~Kis0VadrjIeyPpfBusgoig~hV3fagFA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
    </Cocktail>
    <Cocktail>
      <CocktailImage src="https://s3-alpha-sig.figma.com/img/c777/e5b5/2e474059fe3922ddc038e6d7e649ff4a?Expires=1661126400&Signature=f4sEXTcbRDXs6km0aWRhlcFt9Bfv3Ifl0IJ9AZ6-OqQkubTz11ymeUGXff6EeM1wz4M-prPjSiwX6F6W6~QivF8DDGmTtgjkEvxHLifePrYTV8vDVj8~QLPEaEOAtXfSYDS4Zr5p5wadNNp2x6cwn2-RtGmWFLORDqbkogJ4EzYOc-NCZu31~I5nPNNM4b1mTbGSfl5xtFkPvFfW8qWx4NfANqPWMO~0sl48Sp9fp5GHZwCKXRtptRIa~YEa1qhCERDt88CmFWVbARWQDxv1SMk5OUV7ONLhGqwarrDPpSGv5A6EcJCRfp~Kis0VadrjIeyPpfBusgoig~hV3fagFA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
    </Cocktail>
    <Cocktail>
      <CocktailImage src="https://s3-alpha-sig.figma.com/img/c777/e5b5/2e474059fe3922ddc038e6d7e649ff4a?Expires=1661126400&Signature=f4sEXTcbRDXs6km0aWRhlcFt9Bfv3Ifl0IJ9AZ6-OqQkubTz11ymeUGXff6EeM1wz4M-prPjSiwX6F6W6~QivF8DDGmTtgjkEvxHLifePrYTV8vDVj8~QLPEaEOAtXfSYDS4Zr5p5wadNNp2x6cwn2-RtGmWFLORDqbkogJ4EzYOc-NCZu31~I5nPNNM4b1mTbGSfl5xtFkPvFfW8qWx4NfANqPWMO~0sl48Sp9fp5GHZwCKXRtptRIa~YEa1qhCERDt88CmFWVbARWQDxv1SMk5OUV7ONLhGqwarrDPpSGv5A6EcJCRfp~Kis0VadrjIeyPpfBusgoig~hV3fagFA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
    </Cocktail>
    <Cocktail>
      <CocktailImage src="https://s3-alpha-sig.figma.com/img/c777/e5b5/2e474059fe3922ddc038e6d7e649ff4a?Expires=1661126400&Signature=f4sEXTcbRDXs6km0aWRhlcFt9Bfv3Ifl0IJ9AZ6-OqQkubTz11ymeUGXff6EeM1wz4M-prPjSiwX6F6W6~QivF8DDGmTtgjkEvxHLifePrYTV8vDVj8~QLPEaEOAtXfSYDS4Zr5p5wadNNp2x6cwn2-RtGmWFLORDqbkogJ4EzYOc-NCZu31~I5nPNNM4b1mTbGSfl5xtFkPvFfW8qWx4NfANqPWMO~0sl48Sp9fp5GHZwCKXRtptRIa~YEa1qhCERDt88CmFWVbARWQDxv1SMk5OUV7ONLhGqwarrDPpSGv5A6EcJCRfp~Kis0VadrjIeyPpfBusgoig~hV3fagFA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
    </Cocktail>
  </Wrapper>
  );
};

export default CocktailList;
