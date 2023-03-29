document.getElementById("land").innerHTML= "wait as we find your best matches";
document.getElementById("header-title").innerHTML = "validate";
function validateCountry(field)
{
 return (field == "") ? "No Country was entered.\n" : ""
}
function validateCounty(field)
{
 return (field == "") ? "No County was entered.\n" : ""
}
function validateSubCounty(field)
{
 if (field == "") return "No SubCounty was entered.\n"
 else if (field.length < 3)
 return "SubCounty must be at least 3 characters.\n"
 else if (/[^a-zA-Z0-9_-]/.test(field))
 return "Only a-z, A-Z, 0-9, - and _ allowed in SubCounty.\n"
 return ""
}
function validateConstituency(field)
{
 if (field == "") return "No Constituency was entered.\n"
 else if (field.length < 6)
 return "Constituency must be at least 6 characters.\n"
 else if (!/[a-z]/.test(field) || ! /[A-Z]/.test(field) ||
 !/[0-9]/.test(field))
 return "Constituency require one each of a-z, A-Z and 0-9.\n"
 return ""
}
function validateWard(field)
{
 if (field == "" || isNaN(field)) return "No Ward was entered.\n"
 else if (field < 1 || field > 110)
 return "Ward must be between 1 and 110.\n"
 return ""
}
function validateLocation(field)
{
 if (field == "") return "No Location was entered.\n"
 else if (!((field.indexOf(".") > 0) &&
 (field.indexOf("@") > 0)) ||
 /[^a-zA-Z0-9.@_-]/.test(field))
 return "The location is invalid.\n"
 return ""
}