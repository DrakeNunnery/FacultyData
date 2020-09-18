console.log("employees",employees)
var getFirstnames = function(employee)
{
    return employee.firstName
}
d3.select("body")
.selectAll("h2")
.data(employees)
.enter()
.append("h2")
.text(getFirstnames)
