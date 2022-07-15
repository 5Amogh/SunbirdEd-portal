import { BigDataPipe } from "./big-data.pipe";
import { mockBigData } from "./big-dat.pipe.spec.data";

describe("BigDataPipe", () => {
  let bigData: BigDataPipe;

  beforeEach(() => {
    bigData = new BigDataPipe();
  });

  it("should create an instance", () => {
    expect(bigData).toBeTruthy();
  });

  it("should transform the data of big numbers data", () => {
    let transformedBigData = bigData.transform(mockBigData.bigData);
    expect(transformedBigData).toEqual({ values: mockBigData.bigData });
  });

  it("should transform the data of big numbers data and config", () => {
    let transformedBigData = bigData.transform(
      mockBigData.bigData,
      mockBigData.bigConfig
    );
    expect(transformedBigData).toEqual({ values: mockBigData.applicableData });
  });

  it("should transform the data of big numbers config", () => {
    let transformedBigData = bigData.transform(mockBigData.bigConfig);
    expect(transformedBigData).toEqual(mockBigData.transformedConfig);
  });
});
