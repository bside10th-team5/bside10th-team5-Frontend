import { Box, Title } from "../Templates.style";
import TextareaBasic from "../../../articles/TextareaBasic";

const Design = () => {
    return (
        <Box>
            <Title className="headline-6">오늘 작업한 디자인 업무 내용 중 하나를 선택해 주세요</Title>
            <TextareaBasic />
        </Box>
    );
}

export default Design;