function getProp(trList) {
    var strProp = '';
    var strData = '';
    var strDef = '';
    trList.each(function () {
        var prop = $(this).find('td').first().text().trim();
        var val = $(this).find('td').first().next().text().trim();
        if (!prop) return;
        if (val == 'true' || val == 'false') {
            strProp += `@Prop() private ${prop}!: boolean;\n\n`;
            strDef += `${prop}: boolean;\n`;
            strData += `${prop}: this.parseBool(this.${prop} || ${val}),\n`;
            return;
        }
        if (val.indexOf(':') >= 0) {
            strProp += `@Prop() private ${prop}!: any;\n\n`;
            strDef += `${prop}: any;\n`;
            strData += `${prop}: this.${prop},\n`;
            return;
        }
        if (!isNaN(parseInt(val))) {
            strProp += `@Prop() private ${prop}!: number;\n\n`;
            strDef += `${prop}: number;\n`;
            strData += `${prop}: this.${prop} || ${val},\n`;
            return;
        }
        strProp += `@Prop() private ${prop}!: string;\n\n`;
        strDef += `${prop}: string;\n`;
        strData += `${prop}: this.${prop} || '${val}',\n`;
        return;
    });
    console.log(strProp);
    console.log('==============');
    console.log(strDef);
    console.log('==============');
    console.log(strData);
    console.log('==============');
}