document.write('<table>');

for (i = 1; i <= 10; i++) {
    document.write('<tr>');
    for (j = 1; j <= 10; j++) {
        document.write('<td>' + (i*j) + '</td>');
    }
    document.write('</tr>');
}

document.write('</table');