import React from 'react'
import Image from 'next/image'

const ESImage = (props) => {
  const { width, height, src, sx, ...restProps } = props;
  return <Image src={src} width={width} height={height} alt={"AIRA"} sx={{ p: 0, ...sx }} {...restProps} />;
}

export default ESImage