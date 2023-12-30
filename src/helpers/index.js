import moment from "moment";
import { Images } from "../../assets/Images";
export const getSixDatesObject=(selectedDate)=>{
    const startDate = moment(selectedDate);
    const sixDaysArray = [];

    for (let i = 0; i < 6; i++) {
      const currentDate = startDate.clone().add(i, 'days');
      const dateObject = {
        date: currentDate.format('DD'),
        dayOfWeek: currentDate.format('dddd'),
        isToday: i === 1, // Set the second object as the present day
      };
      sixDaysArray.push(dateObject);
    }

    return sixDaysArray;
}

export const imagesArray=[Images?.heroImg,Images?.heroImg,Images?.heroImg,Images?.heroImg,Images?.heroImg,Images?.heroImg,Images?.heroImg,Images?.heroImg,Images?.heroImg,Images?.heroImg,Images?.heroImg,Images?.heroImg]

export const docData=[
  {heading:"Consults",
  icon:Images?.patients,
  value:"800+"
},
  {heading:"Experience",
  icon:Images?.exp,
  value:"8 Yrs+"
},
  {heading:"Ratings",
  icon:Images?.star_filled,
  value:"4.5"
},
]

export const feesData=[
  {
    heading:"In-Clinic Appointment",
    fees_dollar:'$ 80.70',
    rupee:'Rs. 1400',
    icon:Images?.clinic
  },
  {
    heading:"Virtual Appointment",
    fees_dollar:'$ 80.70',
    rupee:'Rs. 1400',
    icon:Images?.virtual
  },
]