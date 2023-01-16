let age=parseInt(prompt("Enter the Age"));
let parentpermission=confirm("Enter the Parent Permission");
if(age<16)
{
    if(parentpermission==true)
    {
        console.log("Eligible for roller host");
    }
    else
    {
        console.log("Not Eligible for roller host");
    }
}
else if(age>=16 && age<=60)
{
    console.log("Eligible for roller host");
}
else
{
    console.log("Not Eligible for roller host");
}