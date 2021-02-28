var columnList = [
	{ col_name: "ANNUAL_SAL_AMT", label: "Actual Salary", group: "Compensation" },
	{ col_name: "AGE", label: "Age Identifier", group: "Basic" },
	{ col_name: "AREA_ABBREV", label: "Area", group: "Org Hierarchy" },
	{ col_name: "AREA_NM", label: "Area Name", group: "Org Hierarchy" },
	{ col_name: "BIRTH_DAY", label: "Birth Day", group: "Dates and Tenure" },
	{ col_name: "BIRTH_MTH", label: "Birth Month", group: "Dates and Tenure" },
	{
		col_name: "BIRTH_MONTH",
		label: "Birth Month Name",
		group: "Dates and Tenure",
	},
	{ col_name: "COMPA_RATIO", label: "CompaRatio", group: "Compensation" },
	{
		col_name: "CO_CD",
		label: "Company Code",
		group: "Organization and Position",
	},
	{
		col_name: "CO_NM",
		label: "Company Name",
		group: "Organization and Position",
	},
	{
		col_name: "JOB_GROUP_COMP_NM",
		label: "Compensation Job Group",
		group: "Organization and Position",
	},
	{
		col_name: "COST_CTR_NM",
		label: "Cost Center Name",
		group: "Organization and Position",
	},
	{
		col_name: "COST_CTR_ID",
		label: "Cost Center Number",
		group: "Organization and Position",
	},
	{ col_name: "DISTRICT_ABBREV", label: "District", group: "Org Hierarchy" },
	{ col_name: "DISTRICT_NM", label: "District Name", group: "Org Hierarchy" },
	{ col_name: "DIVISION_ABBREV", label: "Division", group: "Org Hierarchy" },
	{ col_name: "DIVISION_NM", label: "Division Name", group: "Org Hierarchy" },
	{
		col_name: "EMERGENCY_CNTCT",
		label: "Emergency Contact",
		group: "Contact Information",
	},
	{
		col_name: "EMERGENCY_CNTCT_PHONE",
		label: "Emergency Contact Phone",
		group: "Contact Information",
	},
	{
		col_name: "EMP_HRS_PCT",
		label: "Employment Percentage",
		group: "Compensation",
	},
	{ col_name: "ETHN_CD", label: "Ethnicity", group: "Basic" },
	{
		col_name: "FULL_TIME_EQUIV_SALARY_AMT",
		label: "FTE Salary",
		group: "Compensation",
	},
	{ col_name: "FIRST_NM", label: "First Name", group: "Basic" },
	{ col_name: "GENDER_ID", label: "Gender", group: "Basic" },
	{ col_name: "GENDER_DESC", label: "Gender Description", group: "Basic" },
	{ col_name: "GENRLST_NM", label: "Generalist", group: "Contact Information" },
	{
		col_name: "HOME_LINE_1_ADDR",
		label: "Home Address (Line 1)",
		group: "Contact Information",
	},
	{
		col_name: "HOME_LINE_2_ADDR",
		label: "Home Address (Line 2)",
		group: "Contact Information",
	},
	{
		col_name: "HOME_CITY_NM",
		label: "Home Address City",
		group: "Contact Information",
	},
	{
		col_name: "HOME_POSTAL_CD",
		label: "Home Postal Code",
		group: "Contact Information",
	},
	{
		col_name: "HOME_CNTRY_SUB_DIV_CD",
		label: "Home State/Province",
		group: "Contact Information",
	},
	{ col_name: "PAY_HR_RT_AMT", label: "Hourly Rate", group: "Compensation" },
	{
		col_name: "JOB_GROUP",
		label: "Job Group",
		group: "Organization and Position",
	},
	{
		col_name: "SAP_MKT_DESCR",
		label: "Job Market Description",
		group: "Compensation",
	},
	{
		col_name: "JOB_MKT_STRCT_CD",
		label: "Job Market Structure",
		group: "Compensation",
	},
	{
		col_name: "JOB_ID",
		label: "Job Number",
		group: "Organization and Position",
	},
	{
		col_name: "CUR_JOB_START_DT",
		label: "Job Start Date",
		group: "Dates and Tenure",
	},
	{
		col_name: "JOB_NM",
		label: "Job Title",
		group: "Organization and Position",
	},
	{ col_name: "KNOWN_AS_NM", label: "Known As", group: "Basic" },
	{ col_name: "LAST_NM", label: "Last Name", group: "Basic" },
	{ col_name: "L3ORGID", label: "Level 3 Org", group: "Org Hierarchy" },
	{ col_name: "L3ORG_NM", label: "Level 3 Org Name", group: "Org Hierarchy" },
	{ col_name: "L4ORGID", label: "Level 4 Org", group: "Org Hierarchy" },
	{ col_name: "L4ORG_NM", label: "Level 4 Org Name", group: "Org Hierarchy" },
	{ col_name: "L5ORGID", label: "Level 5 Org", group: "Org Hierarchy" },
	{ col_name: "L5ORG_NM", label: "Level 5 Org Name", group: "Org Hierarchy" },
	{
		col_name: "WORK_LINE_2_ADDR",
		label: "Mailstop",
		group: "Contact Information",
	},
	{ col_name: "MGR_NM", label: "Manager", group: "Contact Information" },
	{
		col_name: "MAX_RATE_AMT",
		label: "Maximum Pay Range Amount",
		group: "Compensation",
	},
	{
		col_name: "MIN_RATE_AMT",
		label: "Minimum Pay Range  Amount",
		group: "Compensation",
	},
	{
		col_name: "CUR_JOB_TNUR_MONTHS",
		label: "Months in Job",
		group: "Dates and Tenure",
	},
	{
		col_name: "CUR_ORG_JOB_TNUR_MONTHS",
		label: "Months in Role",
		group: "Dates and Tenure",
	},
	{
		col_name: "MOST_RECENT_HIRE_DT",
		label: "Most Recent Hire Date",
		group: "Dates and Tenure",
	},
	{
		col_name: "ORG_NM",
		label: "Organization Name",
		group: "Organization and Position",
	},
	{
		col_name: "ORG_ID",
		label: "Organization Number",
		group: "Organization and Position",
	},
	{
		col_name: "OUT_OF_AREA_CNTCT",
		label: "Out of Area Contact",
		group: "Contact Information",
	},
	{
		col_name: "OUT_OF_AREA_CNTCT_NUM",
		label: "Out of Area Contact Phone",
		group: "Contact Information",
	},
	{ col_name: "PAY_GRADE_CD", label: "Pay Grade", group: "Compensation" },
	{ col_name: "PIR", label: "Position In Range (PIR)", group: "Compensation" },
	{
		col_name: "POSN_ID",
		label: "Position Number",
		group: "Organization and Position",
	},
	{
		col_name: "POSN_TTLE",
		label: "Position Title",
		group: "Organization and Position",
	},
	{ col_name: "RACE_CD", label: "Race", group: "Basic" },
	{ col_name: "REGION_ABBREV", label: "Region", group: "Org Hierarchy" },
	{ col_name: "REGION_NM", label: "Region Name", group: "Org Hierarchy" },
	{ col_name: "FSCL_WK_END_DT", label: "Report Date", group: "Basic" },
	{
		col_name: "CUR_ORG_JOB_START_DT",
		label: "Role Start Date",
		group: "Dates and Tenure",
	},
	{
		col_name: "CUR_COM_TNUR_YRS",
		label: "Starbucks Tenure",
		group: "Dates and Tenure",
	},
	{
		col_name: "EMP_STAT_CD",
		label: "Status",
		group: "Organization and Position",
	},
	{
		col_name: "STORE_ABBREV",
		label: "Store Abbreviation",
		group: "Org Hierarchy",
	},
	{ col_name: "STORE_NUM", label: "Store Number", group: "Org Hierarchy" },
	{
		col_name: "STORE_NONSTORE_FLG",
		label: "Store or Nonstore",
		group: "Org Hierarchy",
	},
	{
		col_name: "WORK_LINE_1_ADDR",
		label: "Work Address",
		group: "Contact Information",
	},
	{
		col_name: "WORK_CITY_NM",
		label: "Work City",
		group: "Contact Information",
	},
	{
		col_name: "WORK_EMAIL_ADDR",
		label: "Work Email",
		group: "Contact Information",
	},
	{
		col_name: "WORK_POSTAL_CD",
		label: "Work Postal Code",
		group: "Contact Information",
	},
	{
		col_name: "WORK_CNTRY_SUB_DIV_CD",
		label: "Work State or Province",
		group: "Contact Information",
	},
];

// const collectByGroup = (columnList) => {
// 	const duplicates = {};
// 	columnList.forEach((column, idx) => {
// 		if (duplicates[column.group]) {
// 			duplicates[column.group].push(column.label);
// 		} else {
// 			duplicates[column.group] = [column.label];
// 		}
// 	});
// 	return duplicates;
// };

const collectByGroup = (columnList) => {
	return columnList.reduce((duplicates, column) => {
		if (duplicates[column.group]) {
			duplicates[column.group].push(column.label);
		} else {
			duplicates[column.group] = [column.label];
		}
		return duplicates;
	}, {});
};

console.log(collectByGroup(columnList));
