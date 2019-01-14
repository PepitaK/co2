<script>
    var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {

    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
        datasets: [{
            label: "Population",
            backgroundColor: 'rgb(205, 39, 192)',
            borderColor: 'rgb(205, 39, 192)',
            data: [<%- JSON.stringify((collection)[numero]._1960); %>,
                  <%- JSON.stringify((collection)[numero]._1961); %>,
                  <%- JSON.stringify((collection)[numero]._1962); %>,
                  <%- JSON.stringify((collection)[numero]._1963); %>,
                  <%- JSON.stringify((collection)[numero]._1964); %>,
                  <%- JSON.stringify((collection)[numero]._1965); %>,
                  <%- JSON.stringify((collection)[numero]._1966); %>,
                  <%- JSON.stringify((collection)[numero]._1967); %>,
                  <%- JSON.stringify((collection)[numero]._1968); %>,
                  <%- JSON.stringify((collection)[numero]._1969); %>,
                  <%- JSON.stringify((collection)[numero]._1970); %>,
                  <%- JSON.stringify((collection)[numero]._1971); %>,
                  <%- JSON.stringify((collection)[numero]._1972); %>,
                  <%- JSON.stringify((collection)[numero]._1972); %>,
                  <%- JSON.stringify((collection)[numero]._1973); %>,
                  <%- JSON.stringify((collection)[numero]._1974); %>,
                  <%- JSON.stringify((collection)[numero]._1975); %>,
                  <%- JSON.stringify((collection)[numero]._1976); %>,
                  <%- JSON.stringify((collection)[numero]._1977); %>,
                  <%- JSON.stringify((collection)[numero]._1978); %>,
                  <%- JSON.stringify((collection)[numero]._1979); %>,
                  <%- JSON.stringify((collection)[numero]._1980); %>,
                  <%- JSON.stringify((collection)[numero]._1981); %>,
                  <%- JSON.stringify((collection)[numero]._1982); %>,
                  <%- JSON.stringify((collection)[numero]._1983); %>,
                  <%- JSON.stringify((collection)[numero]._1984); %>,
                  <%- JSON.stringify((collection)[numero]._1985); %>,
                  <%- JSON.stringify((collection)[numero]._1986); %>,
                  <%- JSON.stringify((collection)[numero]._1987); %>,
                  <%- JSON.stringify((collection)[numero]._1988); %>,
                  <%- JSON.stringify((collection)[numero]._1989); %>,
                  <%- JSON.stringify((collection)[numero]._1990); %>,
                  <%- JSON.stringify((collection)[numero]._1991); %>,
                  <%- JSON.stringify((collection)[numero]._1992); %>,
                  <%- JSON.stringify((collection)[numero]._1993); %>,
                  <%- JSON.stringify((collection)[numero]._1994); %>,
                  <%- JSON.stringify((collection)[numero]._1995); %>,
                  <%- JSON.stringify((collection)[numero]._1996); %>,
                  <%- JSON.stringify((collection)[numero]._1997); %>,
                  <%- JSON.stringify((collection)[numero]._1998); %>,
                  <%- JSON.stringify((collection)[numero]._1999); %>,
                  <%- JSON.stringify((collection)[numero]._2000); %>,
                  <%- JSON.stringify((collection)[numero]._2001); %>,
                  <%- JSON.stringify((collection)[numero]._2002); %>,
                  <%- JSON.stringify((collection)[numero]._2003); %>,
                  <%- JSON.stringify((collection)[numero]._2004); %>,
                  <%- JSON.stringify((collection)[numero]._2005); %>,
                  <%- JSON.stringify((collection)[numero]._2006); %>,
                  <%- JSON.stringify((collection)[numero]._2007); %>,
                  <%- JSON.stringify((collection)[numero]._2008); %>,
                  <%- JSON.stringify((collection)[numero]._2009); %>,
                  <%- JSON.stringify((collection)[numero]._2010); %>,
                  <%- JSON.stringify((collection)[numero]._2011); %>,
                  <%- JSON.stringify((collection)[numero]._2012); %>,
                  <%- JSON.stringify((collection)[numero]._2013); %>,
                  <%- JSON.stringify((collection)[numero]._2014); %>,
                  <%- JSON.stringify((collection)[numero]._2015); %>,
                  <%- JSON.stringify((collection)[numero]._2016); %>,
                  <%- JSON.stringify((collection)[numero]._2017); %>]
        }]
    },

    // Configuration options go here
    options: {}
});


var ctx = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(ctx, {
// The type of chart we want to create
type: 'line',

// The data for our dataset
data: {
    labels: [1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
    datasets: [{
        label: "Co2",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [
        <%- JSON.stringify((collection)[numero].test[0]._1960); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1961); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1962); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1963); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1964); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1965); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1966); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1967); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1968); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1969); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1970); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1971); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1972); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1973); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1974); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1975); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1976); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1977); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1978); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1979); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1980); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1981); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1982); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1983); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1984); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1985); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1986); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1987); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1988); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1989); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1990); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1991); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1992); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1993); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1994); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1995); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1996); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1997); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1998); %>,
        <%- JSON.stringify((collection)[numero].test[0]._1999); %>,
        <%- JSON.stringify((collection)[numero].test[0]._2000); %>,
        <%- JSON.stringify((collection)[numero].test[0]._2001); %>,
        <%- JSON.stringify((collection)[numero].test[0]._2002); %>,
        <%- JSON.stringify((collection)[numero].test[0]._2003); %>,
        <%- JSON.stringify((collection)[numero].test[0]._2004); %>,
        <%- JSON.stringify((collection)[numero].test[0]._2005); %>,
        <%- JSON.stringify((collection)[numero].test[0]._2006); %>,
        <%- JSON.stringify((collection)[numero].test[0]._2007); %>,
        <%- JSON.stringify((collection)[numero].test[0]._2008); %>,
        <%- JSON.stringify((collection)[numero].test[0]._2009); %>,
        <%- JSON.stringify((collection)[numero].test[0]._2010); %>,
        <%- JSON.stringify((collection)[numero].test[0]._2011); %>,
        <%- JSON.stringify((collection)[numero].test[0]._2012); %>,
        <%- JSON.stringify((collection)[numero].test[0]._2013); %>,
        <%- JSON.stringify((collection)[numero].test[0]._2014); %>,
        <%- JSON.stringify((collection)[numero].test[0]._2015); %>,
        <%- JSON.stringify((collection)[numero].test[0]._2016); %>
        ]
    }]
},

// Configuration options go here
options: {}
});

</script>
