import * as C from "./styles";
import { formatCurrentMonth, getCurrentMonth } from "../../helpers/dateFilter";

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
};

const InfoArea = ({ currentMonth, onMonthChange }: Props) => {
    const handleChangeDate = (changeDate: string) => {
        const [year, month] = currentMonth.split("-");
        const currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        if (changeDate === "prev") {
            currentDate.setMonth(currentDate.getMonth() - 1);
        } else {
            currentDate.setMonth(currentDate.getMonth() + 1);
        }
        const newMonth = (currentDate.getMonth() + 1)
            .toString()
            .padStart(2, "0");
        const newYear = currentDate.getFullYear().toString();
        onMonthChange(`${newYear}-${newMonth}`);
    };

    return (
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={() => handleChangeDate("prev")}>
                    ⬅️
                </C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={() => handleChangeDate("next")}>
                    ➡️
                </C.MonthArrow>
            </C.MonthArea>

            <C.ResumeArea>...</C.ResumeArea>
        </C.Container>
    );
};

export default InfoArea;
