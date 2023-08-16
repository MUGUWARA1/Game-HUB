import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"
const GamecardSkeleton = () => {
  return (
    <Card width={'300px'} borderRadius={10} overflow='hidden'>
        <Skeleton height={'200px'}></Skeleton>
        <CardBody>
            <SkeletonText></SkeletonText>
        </CardBody>
    </Card>
  )
}

export default GamecardSkeleton