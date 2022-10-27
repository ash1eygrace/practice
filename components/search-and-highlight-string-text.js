/*
The following script highlights the status of each file added to the Info column of an HTML table
to quickly locate the finished, failed, and imorting files.

Example HTML TABLE: 
```
    <table>
        <thead>
            <tr>
                <th>URL</th>
                <th>Status</th>
                <th>Info</th>
            </tr>
        </thead>
        <tbody>
            <tr>
        <td>running</td>
        <td><pre>stuff_here<br>
        (
            [example.file.0.xml] 
                (
                    [url] = https://example-site.com/example-directory/example.file.0.xml
                    [status] = finished
                    [id] = 1223abc
                )
            [example.file.1.xml] 
                (
                    [url] = https://example-site.com/example-directory/example.file.1.xml
                    [status] = failed
                    [id] = 1223abc
                )
            [example.file.2.xml] 
                (
                    [url] = https://example-site.com/example-directory/example.file.2.xml
                    [status] = finished
                    [id] = 1223abc
                )
            [example.file.3.xml] 
                (
                    [url] = https://example-site.com/example-directory/example.file.3.xml
                    [status] = running
                    [id] = 1223abc
                )
        )
        <br></pre></td>
        </tr>
        </tbody>
        </table>
```
*/
for (let i = 0; i < logDetailsColumn.length; i++) {
    let failedText = logDetailsColumn[i].innerHTML;
    failedText = failedText.replace(/(\[status\] = failed)/g, '<span style="background-color:#FF7C82">$1</span>');
    logDetailsColumn[i].innerHTML = failedText;

    let runningText = logDetailsColumn[i].innerHTML;
    runningText = runningText.replace(/(\[status\] = running)/g, '<span style="background-color:#ffec80">$1</span>');
    logDetailsColumn[i].innerHTML = runningText;

    let finishedText = logDetailsColumn[i].innerHTML;
    finishedText = finishedText.replace(/(\[status\] = finished)/g, '<span style="background-color:#61cf40">$1</span>');
    logDetailsColumn[i].innerHTML = finishedText;
}