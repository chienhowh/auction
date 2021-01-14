import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  /**
   * @param {any[]} list 搜索列表
   * @param {string} filterField 搜索列表的範圍
   * @param {string} keyword 搜索關鍵字
   */
  transform(list: any[], filterField: string, keyword: string): unknown {
    // 沒設定直接回傳原始列表
    if (!filterField || !keyword) { return list; }
    return list.filter(item => {
      return item[filterField].includes(keyword.trim())
    })
  }

}
