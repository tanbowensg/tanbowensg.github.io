<h4>功能：</h4>
<p>
1、给datatables的每一列生成一个类似excel的筛选器。</br>
2、筛选器会自动根据列的内容弹出文本筛选或者数值筛选。</br>
3、文本筛选可以选择“等于”“不等于“”包含“”不包含“四种选项。</br>
4、数值筛选可以根据一个区间筛选。</br>
5、支持多个列同时筛选。</br>
</p>

<h4>使用说明：</h4>
<p>
1、仅支持Datatables 1.10以上版本。</br>
2、需要加载jQuery和Bootstrap。</br>
3、datatable中的searching参数必须为true，否则无效。
</p>

<h4>使用范例：</h4>
<p>
var table = $('#tableID').DataTable()</br>
improvedFilter(table) 。具体内容参见源码。
</p>

<h4>2015.8.30 重大更新V1.1</h4>
修复了三个BUG</br>
1、点击清除后，需要点两次漏斗才能再次显示弹出窗口的BUG</br>
2、数字筛选会应用到所有列的BUG</br>
3、点击应用或者清楚后，下次点开弹出窗口，上次输入的关键词会消失的BUG
