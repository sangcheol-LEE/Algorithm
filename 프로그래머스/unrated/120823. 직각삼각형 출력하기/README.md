# [unrated] 직각삼각형 출력하기 - 120823 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120823) 

### 성능 요약

메모리: 32.2 MB, 시간: 50.13 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

Empty

### 문제 설명

<p>"*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고합니다.  정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>n</code> ≤ 10</li>
</ul>

<hr>

<h5>입출력 예</h5>

<p>입력 #1</p>
<div class="highlight"><pre class="codehilite"><code>3
</code></pre></div>
<p>출력 #1</p>
<div class="highlight"><pre class="codehilite"><code>*
**
***
</code></pre></div>
<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>n이 3이므로 첫째 줄에 * 1개, 둘째 줄에 * 2개, 셋째 줄에 * 3개를 출력합니다.</li>
</ul>


## 클래스 화

class Solution {
  constructor(arr) {
    this.arr = arr;
  }
  getX_axisArray() {
    let x_axis_array = [];
    this.arr.forEach((element) => {
      x_axis_array.push(element[0]);
    });
    return x_axis_array;
  }
  getY_axisArray() {
    let y_axis_array = [];
    this.arr.forEach((element) => {
      y_axis_array.push(element[1]);
    });
    return y_axis_array;
  }
  getMaxX_axis() {
    return Math.max(...this.getX_axisArray());
  }
  getMinX_axis() {
    return Math.min(...this.getX_axisArray());
  }
  getMaxY_axis() {
    return Math.max(...this.getY_axisArray());
  }
  getMinY_axis() {
    return Math.min(...this.getY_axisArray());
  }
  getTotalLength() {
    return (
      (this.getMaxX_axis() - this.getMinX_axis()) *
      (this.getMaxY_axis() - this.getMinY_axis())
    );
  }
}

const ret = new Solution([
  [1, 1],
  [2, 1],
  [2, 2],
  [1, 2],
]);
const ret2 = new Solution([
  [-1, -1],
  [1, 1],
  [1, -1],
  [-1, 1],
]);



> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
