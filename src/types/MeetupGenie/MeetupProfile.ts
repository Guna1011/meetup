import { MeetupHoliday } from './MeetupHoliday'

export interface MeetupProfile{
	creation: string
	name: string
	modified: string
	owner: string
	modified_by: string
	docstatus: 0 | 1 | 2
	parent?: string
	parentfield?: string
	parenttype?: string
	idx?: number
	/**	Employee ID : Link - Employee	*/
	employee_id?: string
	/**	Name : Data	*/
	name1?: string
	/**	Gender : Data	*/
	gender?: string
	/**	Designation : Data	*/
	designation?: string
	/**	Experience : Data	*/
	experience?: string
	/**	Education Qualification : Data	*/
	education_qualification?: string
	/**	Contact No : Data	*/
	contact_no?: string
	/**	Email : Data	*/
	email?: string
	/**	Location : Data	*/
	location?: string
	/**	Previous Designation : Data	*/
	previous_designation?: string
	/**	Bio / Cover Letter : Text Editor	*/
	bio?: string
	/**	Scheduled Days : Table - My Schedule	*/
	scheduled_days?: any
	/**	Is Weekoff Included in Holiday List : Check	*/
	is_weekoff_included_in_holiday_list?: 0 | 1
	/**	From Date : Date	*/
	from_date?: string
	/**	Weekly Off : Select	*/
	weekly_off?: "" | "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday"
	/**	To Date : Data	*/
	to_date?: string
	/**	Holiday List : Table - Meetup Holiday	*/
	holiday_list?: MeetupHoliday[]
	/**	Meeting Duration : Select	*/
	meeting_duration?: "" | "15 Mins" | "30 Mins" | "60 Mins"
}