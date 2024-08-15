import {Typography} from "@mui/material";
import {GridContainer, GridRow, SquareDiv, StyledGridItem, StyledPaper} from "../../css/GridStyled";

function CarsTableComponent() {
    const rows = 7;
    const cols = 3;

    return (
        <GridContainer container spacing={0}>
            {[...Array(rows)].map((_, rowIndex) => (
                <GridRow container item spacing={0} key={rowIndex}>
                    {[...Array(cols)].map((_, colIndex) => (
                        <StyledGridItem
                            item
                            xs={12}  // 모바일 화면에서는 한 줄에 한 칸씩
                            sm={6}   // 작은 화면에서는 한 줄에 2칸씩
                            md={4}   // 중간 화면에서는 한 줄에 3칸씩
                            lg={3}   // 큰 화면에서는 한 줄에 4칸씩
                            xl={2}   // 아주 큰 화면에서는 한 줄에 6칸씩
                            key={colIndex}
                        >
                            <SquareDiv>
                                <StyledPaper>
                                    <Typography>
                                        Row {rowIndex + 1} Col {colIndex + 1}
                                    </Typography>
                                </StyledPaper>
                            </SquareDiv>
                        </StyledGridItem>
                    ))}
                </GridRow>
            ))}
        </GridContainer>
    );
}

export default CarsTableComponent;