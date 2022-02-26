import { styled, Link, Box, Typography } from '@mui/material'

interface CardProps {
  stockNumber: number
  manufacturerName: string
  modelName: string
  color: string
  mileage: {
    number: number
    unit: string
  }
  fuelType: string
  pictureUrl: string
}

export const Card = ({
  stockNumber,
  manufacturerName,
  modelName,
  color,
  mileage,
  fuelType,
  pictureUrl,
}: CardProps) => {
  const title = `${manufacturerName} ${modelName}`

  return (
    <CardBox>
      <ImgLink component="button" title={title}>
        <CardPic />
      </ImgLink>

      <CardInfo>
        <Title variant="h3">{title}</Title>

        <Typography mb={0.5}>
          Stock: # {stockNumber} - {mileage.number}{' '}
          <Uppercase>{mileage.unit}</Uppercase> - {fuelType} - {color}
        </Typography>

        <ButtonDetails component="button" title="View Details">
          View Details
        </ButtonDetails>
      </CardInfo>
    </CardBox>
  )
}

export const CardSkeleton = () => (
  <CardBox>
    <CardPic />

    <CardInfo>
      <GrayBox width={264} height={28} mb={0.5} />
      <GrayBox width={264} height={16} mb={1} />
      <GrayBox width={76} height={16} />
    </CardInfo>
  </CardBox>
)

const CardBox = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  padding: theme.spacing(1.5),
}))

const GrayBox = styled(Box)(({ theme }) => ({
  background: theme.palette.divider,
}))

const CardPic = styled(GrayBox)(({ theme }) => ({
  flexShring: 0,
  width: theme.spacing(13),
  height: theme.spacing(10),
}))

const CardInfo = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  marginLeft: theme.spacing(3),
}))

const Title = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(18),
  fontWeight: 'bold',
  marginBottom: theme.spacing(0.5),
}))

const Uppercase = styled('span')(() => ({
  textTransform: 'uppercase',
}))

const ButtonDetails = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  borderBottom: '1px solid transparent',
  transition: 'all 200ms ease',
  '&:hover': {
    borderBottomColor: theme.palette.primary.main,
  },
})) as typeof Link

const ImgLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
})) as typeof Link